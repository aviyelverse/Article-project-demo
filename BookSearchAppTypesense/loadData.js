const Typesense = require('typesense');

const runClient = async () => {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        port: '8108', // For Typesense Cloud use 443
        protocol: 'http', // For Typesense Cloud use https
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

  const loadData = await client.collections().create(booksSchema);

  console.log(loadData);
};

runClient();
