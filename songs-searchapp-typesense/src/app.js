const { instantsearch } = window;

import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'songsearch',
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: 'title,primary_artist_name,album_name', //quering by
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const search = instantsearch({
  searchClient,
  indexName: 'songs',
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 20,
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <h2>
        {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
      </h2>
      <div>
        by
        <a style="color:#FF6F82">{{#helpers.highlight}}{ "attribute": "primary_artist_name" }{{/helpers.highlight}}</a>
      </div>
      <div>
        Album: <a style="color:#8661d1" >{{#helpers.highlight}}{ "attribute": "album_name" }{{/helpers.highlight}}</a>
      </div>
      <div class="text-muted small mb-2">
        {{ release_date_display }}
      </div>
      `,
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#genreFilter',
    attribute: 'genres',
    searchable: true,
    searchablePlaceholder: 'Search genres',
    showMore: true,
  }),
  instantsearch.widgets.refinementList({
    container: '#artistFilter',
    attribute: 'primary_artist_name',
    searchable: true,
    searchablePlaceholder: 'Search Artist',
    showMore: true,
  }),
  instantsearch.widgets.sortBy({
    container: '#sort-songs',
    items: [
      { label: 'Default', value: `songs` },
      { label: 'Recent songs', value: `songs/sort/release_date:asc` },
      { label: 'Oldest songs', value: `songs/sort/release_date:desc` },
    ],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
