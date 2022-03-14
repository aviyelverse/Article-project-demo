import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import ResultTemplate from "./components/ResultTemplate";
import "./App.css";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  SortBy,
  Panel,
  RefinementList,
} from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite.css";
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "superhero",
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: "title,synopsis,genre",
    queryByWeights: "4,2,1",
    numTypos: 3,
    typoTokensThreshold: 1,
  },
});

const App = () => {
  return (
    <>
      <h1 className="super-title">
        👊🏻Superhero search application built using react
      </h1>

      <InstantSearch
        indexName="heroes"
        searchClient={typesenseInstantsearchAdapter.searchClient}
      >
        <Configure hitsPerPage={12} />
        <div className="search-container">
          <aside className="results-section">
            <Panel header="Popularity">
              <SortBy
                items={[
                  { label: "Default", value: "heroes" },
                  {
                    label: "ranked (asc)",
                    value: "heroes/sort/Height:asc",
                  },
                  {
                    label: "ranked (desc)",
                    value: "heroes/sort/Height:desc",
                  },
                ]}
                defaultRefinement="heroes"
              />
            </Panel>
            <Panel header="Genre">
              <RefinementList
                attribute="genre"
                transformItems={(items) =>
                  items.map((item) => ({
                    ...item,
                    label: item.label.slice(2, -2),
                  }))
                }
                searchable={true}
                showMore={true}
                limit={10}
                showMoreText="Show more"
                showLessText="Show less"
              />
            </Panel>
            <Panel header="Aired">
              <RefinementList attribute="aired" />
            </Panel>
          </aside>
          <main>
            <SearchBox />
            <div className="searchbox-gap"></div>
            <Hits hitComponent={ResultTemplate} />
            <Pagination />
          </main>
        </div>
      </InstantSearch>
    </>
  );
};
export default App;
