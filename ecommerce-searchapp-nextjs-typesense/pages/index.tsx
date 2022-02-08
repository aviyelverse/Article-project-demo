import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

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

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [wiggle, setWiggle] = useState(false);
  const [buttonText, setButtonText] = useState("Light☀️");
  const changeText = () =>
    setButtonText((text) => (text === "Light☀️" ? "Dark🌚" : "Light☀️"));

  return (
    <>
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
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Ecommerce SearchApp Nextjs Typesense</h1>
        </main>
      </div>
    </>
  );
};

export default Home;
