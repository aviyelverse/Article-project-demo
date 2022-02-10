const _ = require('lodash');
const fastJson = require('fast-json-stringify');
const fs = require('fs');
const readline = require('readline');
const Typesense = require('typesense');

const stringify = fastJson({
  title: 'Song Schema',
  type: 'object',
  properties: {
    track_id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    album_name: {
      type: 'string',
      nullable: true,
    },
    primary_artist_name: {
      type: 'string',
    },
    genres: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    country: {
      type: 'string',
    },
    release_date: {
      type: 'integer',
    },
    release_decade: {
      type: 'string',
    },
    release_group_types: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    urls: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
        },
      },
    },
  },
});

const BATCH_SIZE = 200;
const CHUNK_SIZE = 3;
const MAX_LINES = Infinity;
const DATA_FILE = './dataset/songs.json';

function extractUrls(parsedRecord) {
  return parsedRecord['relations']
    .filter(r =>
      [
        'amazon asin',
        'streaming',
        'free streaming',
        'download for free',
        'purchase for download',
      ].includes(r['type'])
    )
    .map(r => {
      return { type: r['type'], url: r['url']['resource'] };
    });
}

async function addSongsToTypesense(songs, typesense, songsCollection) {
  try {
    const returnDataChunks = await Promise.all(
      _.chunk(songs, Math.ceil(songs.length / CHUNK_SIZE)).map(songsChunk => {
        const jsonlString = songsChunk.map(song => stringify(song)).join('\n');

        return typesense
          .collections(songsCollection)
          .documents()
          .import(jsonlString);
      })
    );

    const failedItems = returnDataChunks
      .map(returnData =>
        returnData
          .split('\n')
          .map(r => JSON.parse(r))
          .filter(item => item.success === false)
      )
      .flat();
    if (failedItems.length > 0) {
      throw new Error(
        `Error indexing items ${JSON.stringify(failedItems, null, 2)}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = (async () => {
  const typesense = new Typesense.Client({
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: 'songsearch',
  });

  await typesense.collections('songs').delete();

  const songsCollection = 'songs';
  const schema = {
    name: songsCollection,
    fields: [
      { name: 'track_id', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'album_name', type: 'string', optional: true },
      { name: 'primary_artist_name', type: 'string', facet: true },
      { name: 'genres', type: 'string[]', facet: true },
      { name: 'country', type: 'string', facet: true },
      { name: 'release_date', type: 'int64' },
      { name: 'release_decade', type: 'string', facet: true },
      { name: 'release_group_types', type: 'string[]', facet: true },
    ],
    default_sorting_field: 'release_date',
  };

  console.log(`Populating data in Typesense "${songsCollection}" collection`);

  console.log(`Creating schema...`);
  await typesense.collections().create(schema);

  console.log(`Songs records...`);

  const fileStream = fs.createReadStream(DATA_FILE);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let songs = [];
  let currentLine = 0;
  for await (const line of rl) {
    currentLine += 1;
    const parsedRecord = JSON.parse(line);
    try {
      songs.push(
        ...parsedRecord['media']
          .map(media => media['tracks'])
          .flat()
          .filter(track => track) // To remove nulls
          .map(track => {
            const releaseDate =
              Math.round(
                Date.parse(
                  parsedRecord['release-group']['first-release-date']
                ) / 1000
              ) || 0;

            // Be sure to update the schema passed to stringify when updating this structure
            const song = {
              track_id: track['id'],
              title: track['title'],
              album_name: parsedRecord['title'],
              primary_artist_name:
                parsedRecord['artist-credit'][0]['artist']['name'],
              genres: [
                ...track['recording']['genres'].map(g => g.name),
                ...parsedRecord['genres'].map(g => g.name),
                ...parsedRecord['release-group']['genres'].map(g => g.name),
              ].map(
                ([firstChar, ...rest]) =>
                  firstChar.toUpperCase() + rest.join('').toLowerCase()
              ),
              country: parsedRecord['country'] || 'Unknown',
              release_date: releaseDate,
              release_decade: `${Math.round(
                new Date(releaseDate * 1000).getUTCFullYear() / 10
              ) * 10}s`,
              release_group_types: [
                parsedRecord['release-group']['primary-type'] || 'Unknown',
                parsedRecord['release-group']['secondary-types'] || null,
              ]
                .flat()
                .filter(e => e),
              urls: extractUrls(parsedRecord),
            };
            process.stdout.write('-');

            return song;
          })
      );
    } catch (e) {
      console.error(e);
      console.error(parsedRecord);
      throw e;
    }

    if (currentLine >= MAX_LINES) {
      break;
    }
  }

  if (songs.length > 0) {
    await addSongsToTypesense(songs, typesense, songsCollection);
    console.log('ALL songs INDEXED ✅ !');
  }
})();
