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
        item: ` <article class="hit">
          <div>
            <h1>
              {{#helpers.snippet}}{ "attribute": "word" }{{/helpers.snippet}}
            </h1>
          </div>
          <div
            style="
              display: grid;
              grid-auto-flow: column;
              justify-content: start;
              align-items: center;
              gap: 8px;
            "
          >
           
            <div
              style="
                display: grid;
                grid-auto-flow: column;
                justify-content: start;
                align-items: center;
                gap: 4px;
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="
                  position: relative;
                  top: 1px;
                "
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </article>`,
      },
    }),
  ]),
]);

search.start();
