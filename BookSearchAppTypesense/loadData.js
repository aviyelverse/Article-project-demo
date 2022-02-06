const Typesense = require('typesense');

const runClient = () => {
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
};

runClient();
