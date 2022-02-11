const fs = require('fs');
const readline = require('readline');
const Typesense = require('typesense');

async function indexWordsToTypesense(typesense, wordsCollection, englishWords) {
  const results = await typesense
    .collections(wordsCollection)
    .documents()
    .import(englishWords);

  const failedItems = results.filter(item => item.success === false);
  if (failedItems.length > 0) {
    console.log(JSON.stringify(failedItems, null, 2));
    throw 'Error indexing items';
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
    apiKey: 'spellcheck',
  });

  await typesense.collections('words').delete();

  const wordsCollection = `words`;
  const schema = {
    name: wordsCollection,
    fields: [
      { name: 'word', type: 'string' },
      { name: 'popularity', type: 'int32' },
    ],
    default_sorting_field: 'popularity',
  };

  console.log(`Populating data in Typesense "${wordsCollection}" collection`);

  console.log('Creating schema: ');
  await typesense.collections().create(schema);

  console.log('Adding records: ');

  const fileStream = fs.createReadStream('./dataset/words.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let englishWords = [];
  let currentLine = 0;
  for await (const line of rl) {
    currentLine += 1;
    const parsedRecord = JSON.parse(line);
    try {
      englishWords.push({
        word: String(parsedRecord['word']),
        popularity: parseInt(parsedRecord['count']),
      });
    } catch (e) {
      console.error(e);
      console.error(parsedRecord);
      throw e;
    }

    if (currentLine % 5000 === 0) {
      await indexWordsToTypesense(typesense, wordsCollection, englishWords);
      console.log(` Words upto ${currentLine} ✅`);
      englishWords = [];
    }

    if (currentLine >= Infinity) {
      break;
    }
  }

  if (englishWords.length > 0) {
    await indexWordsToTypesense(typesense, wordsCollection, englishWords);
    console.log('✅');
  }

  let oldCollectionName;
  try {
    oldCollectionName = await typesense.aliases('english_words').retrieve()[
      'collection_name'
    ];
  } catch (error) {
    console.error(error);
  }
})();
