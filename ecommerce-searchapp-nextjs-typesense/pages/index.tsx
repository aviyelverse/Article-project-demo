import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  SortBy,
  RefinementList,
} from "react-instantsearch-dom";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "ecommerce",
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: "name,categories,description",
    queryByWeights: "4,2,1",
    numTypos: 1,
    typoTokensThreshold: 1,
  },
});

interface Props {
  hit: any;
}

export const ResultTemplate = ({ hit }: Props) => {
  return (
    <>
      <div className="bg-gray-500 shadow-md rounded-lg p-9 mr-5">
        <div className="p-24">
          <Image src={hit.image} height={160} width={85} layout="responsive" />
        </div>
        <h3 className="truncate">{hit.name}</h3>
        <h3 className="truncate">Price: ${hit.price}</h3>
        <p>{hit.description}</p>
      </div>
    </>
  );
};

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [wiggle, setWiggle] = useState(false);
  const [buttonText, setButtonText] = useState("Light☀️");
  const changeText = () =>
    setButtonText((text) => (text === "Light☀️" ? "Dark🌚" : "Light☀️"));

  return (
    <>
      <h1 className={styles.title}>Ecommerce Search App Nextjs Typesense</h1>
      <button
        className={`${
          wiggle && "animate-wiggle"
        } bg-green-500 p-4 text-black rounded-full hover:bg-green-400 hover:shadow-xl mt-5 ml-5`}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setWiggle(!wiggle);
          changeText();
        }}
        onAnimationEnd={() => setWiggle(false)}
      >
        {buttonText}
      </button>

      <InstantSearch
        indexName="products"
        searchClient={typesenseInstantsearchAdapter.searchClient}
      >
        <Configure hitsPerPage={12} />
        <div className="flex">
          <aside className="w-1/4 pl-4 h-screen">
            <RefinementList attribute="brand" />
          </aside>
          <main>
            <SearchBox />
            <SortBy
              items={[
                { label: "Relevancy", value: "products" },
                { label: "Price (asc)", value: "products/sort/price:asc" },
                { label: "Price (desc)", value: "products/sort/price:desc" },
              ]}
              defaultRefinement="products"
            />
            <Hits hitComponent={ResultTemplate} />
            <Pagination />
          </main>
        </div>
      </InstantSearch>
    </>
  );
};

export default Home;
