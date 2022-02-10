const Typesense = require('typesense');
const fs = require('fs/promises');

const runClient = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: 'songsearch',
    connectionTimeoutSeconds: 2,
  });

  const songSchema = {
    name: 'songs',
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

  //   await client.collections('songs').delete();
  const loadData = await client.collections().create(songSchema);
  const documents = await fs.readFile('./dataset/songs.json');
  client
    .collections('songs')
    .documents()
    .import(documents, { batch_size: 200 });

  console.log(loadData);
};

runClient();
