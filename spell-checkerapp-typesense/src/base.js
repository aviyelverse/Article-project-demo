import { SearchClient as TypesenseSearchClient } from 'typesense';
import jQuery from 'jquery';
import 'regenerator-runtime/runtime';
window.$ = jQuery; // workaround for https://github.com/parcel-bundler/parcel/issues/333

let TYPESENSE_SERVER_CONFIG = {
  apiKey: 'spellcheck',
  nodes: [
    {
      host: 'localhost',
      port: '8108',
      protocol: 'http',
    },
  ],
  numRetries: 8,
};

const typesense = new TypesenseSearchClient(TYPESENSE_SERVER_CONFIG);

let lastWord = '';
window.document
  .getElementById('textbox')
  .addEventListener('keyup', async event => {
    const currentWord = event.target.value
      .trim()
      .split(' ')
      .pop()
      .toLowerCase();

    // Prevent duplicate requests
    if (lastWord === currentWord) {
      return;
    }
    lastWord = currentWord;

    // Get suggestions
    const results = await typesense.multiSearch.perform({
      searches: [
        {
          q: currentWord,
          query_by: 'word',
          collection: 'words',
          sort_by: 'popularity:desc',
          per_page: 4,
        },
      ],
    });

    const suggestedWords = (results['results'][0] || { hits: [] })['hits'].map(
      h => h['document']['word']
    );
    console.log(`${currentWord} => ${suggestedWords.join(' | ')}`);

    // Remove existing suggestions, show new ones
    $('#hits').empty();
    suggestedWords.forEach(word => {
      // Don't show suggestions if it's exact match
      if (word === currentWord) {
        return;
      }
      $('#hits').append($(`<li>${word}</li>`));
    });
  });
