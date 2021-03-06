import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: 'title,authors',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const search = instantsearch({
  searchClient,
  indexName: 'books',
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 12,
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image_url}}" align="left" alt="" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "authors" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">{{publication_year}}</div>
          <div class="hit-rating">Rating:{{average_rating}} </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#filterList',
    attribute: 'authors',
  }),
  instantsearch.widgets.sortBy({
    container: '#sort-books',
    items: [
      { label: 'Default', value: 'books' },
      { label: 'Ratings', value: 'books/sort/average_rating:asc' },
      { label: 'Publication year', value: 'books/sort/publication_year:asc' },
    ],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
