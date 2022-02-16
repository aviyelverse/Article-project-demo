import React from "react";

const ResultTemplate = ({ hit }) => {
  return (
    <>
      <div className="anime-container">
        <div className="anime-wrapper">
          <a href={hit.link} target="_blank">
            <img className="anime-image" src={hit.img_url} alt="movie" />
          </a>
        </div>
        <a href={hit.link} target="_blank">
          <h2 className="anime-title">{hit.title}</h2>
        </a>
        <h3 className="anime-genre">Genres: {hit.genre}</h3>
        <p>{hit.synopsis}</p>
      </div>
    </>
  );
};

export default ResultTemplate;
