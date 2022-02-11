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
    hitsPerPage: 4,
    enablePersonalization: true,
  }),

  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Spellcheck..',
    showReset: true,
    showLoadingIndicator: false,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    sortBy: 'popularity:desc',
    templates: {
      item:
        '{{#helpers.highlight}}{ "attribute": "word" }{{/helpers.highlight}}',
    },
  }),
]);

search.start();
