const Typesense = require('typesense');

const runClient = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    connectionTimeoutSeconds: 2,
  });

  const booksSchema = {
    name: 'books',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'authors', type: 'string[]', facet: true },

      { name: 'publication_year', type: 'int32', facet: true },
      { name: 'ratings_count', type: 'int32' },
      { name: 'average_rating', type: 'float' },
    ],
    default_sorting_field: 'ratings_count',
  };

  await client.collections('books').delete();
  const loadData = await client.collections().create(booksSchema);

  console.log(loadData);
};

runClient();
