import React from "react";
const ResultTemplate = ({ hit }) => {
  return (
    <>
      <div className="superhero-container">
        <div className="superhero-wrapper">
          <a href={hit.link} target="_blank">
            <img className="Superhero-image" src={hit.img_url} alt="movie" />
          </a>
        </div>
        <a href={hit.link} target="_blank">
          <h2 className="superhero-title">{hit.name}</h2>
        </a>
        <h3 className="superhero-genre">Race: {hit.Race}</h3>
        <p>Gender: {hit.Gender}</p>
        <p>Publisher: {hit.Publisher}</p>
      </div>
    </>
  );
};
export default ResultTemplate;
