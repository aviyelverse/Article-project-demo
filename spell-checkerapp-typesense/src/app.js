const { instantsearch } = window;

import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'spellcheck',
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: 'word', //quering by
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;
const search = instantsearch({
  indexName: 'words',
  searchClient,
});
search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),

  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.index({ indexName: 'words' }).addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 8,
    }),

    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item:
          '{{#helpers.highlight}}{ "attribute": "word" }{{/helpers.highlight}}',
      },
    }),
  ]),
]);

search.start();
