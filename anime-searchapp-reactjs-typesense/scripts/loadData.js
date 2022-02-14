const Typesense = require("typesense");

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
    apiKey: "animesearch",
  };

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "animes",
    num_documents: 0,
    fields: [
      {
        name: "title",
        type: "string",
        facet: false,
      },
      {
        name: "synopsis",
        type: "string",
        facet: false,
      },
      {
        name: "genre",
        type: "string[]",
        facet: true,
      },
      {
        name: "genre.lvl0",
        type: "string[]",
        facet: true,
      },
      {
        name: "genre.lvl1",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "genre.lvl2",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "genre.lvl3",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "genre.lvl4",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "aired",
        type: "string",
        facet: true,
      },
      {
        name: "popularity",
        type: "float",
        facet: true,
      },
      {
        name: "ranked",
        type: "float",
        facet: true,
      },
      {
        name: "score",
        type: "string",
        facet: true,
      },
      {
        name: "img_url",
        type: "string",
        facet: true,
      },
      {
        name: "link",
        type: "string",
        facet: true,
      },
    ],
    default_sorting_field: "popularity",
  };

  const animes = require("../dataset/animes.json");

  try {
    const collection = await typesense.collections("animes").retrieve();
    console.log("Found existing collection of animes");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== animes.length) {
      console.log("Collection has diff number of docs than data");
      console.log("Deleting collection");
      await typesense.collections("animes").delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Populating collection data...");

  const bulk = animes.map((anime) => {
    const genre = anime.genres.map((genre) => {
      return {
        name: genre,
      };
    });
  });

  try {
    const returnData = await typesense
      .collections("animes")
      .documents()
      .import(animes);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();
