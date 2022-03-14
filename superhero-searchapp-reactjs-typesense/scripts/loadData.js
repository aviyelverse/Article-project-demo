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
    apiKey: "superhero",
  };
  console.log("Config: ", TYPESENSE_CONFIG);
  const typesense = new Typesense.Client(TYPESENSE_CONFIG);
  const schema = {
    name: "heroes",
    num_documents: 0,
    fields: [
      {
        name: "name",
        type: "string",
        facet: false,
      },
      {
        name: "Race",
        type: "string",
        facet: false,
      },
      {
        name: "Gender",
        type: "auto",
        facet: true,
      },
      {
        name: "Publisher",
        type: "auto",
        facet: true,
      },
      {
        name: "Publisher.lvl0",
        type: "auto",
        facet: true,
        optional: true,
      },
      {
        name: "Publisher.lvl1",
        type: "auto",
        facet: true,
        optional: true,
      },
      {
        name: "Publisher.lvl2",
        type: "auto",
        facet: true,
        optional: true,
      },
      {
        name: "Publisher.lvl3",
        type: "auto",
        facet: true,
        optional: true,
      },
      {
        name: "Height",
        type: "string",
        facet: true,
      },
      {
        name: "Alignment",
        type: "float",
        facet: true,
      },
      {
        name: "Weight",
        type: "float",
        facet: true,
      },
    ],
    default_sorting_field: "Publisher",
  };
  const heroes = require("../dataset/heroes.json");
  try {
    const collection = await typesense.collections("heroes").retrieve();
    console.log("Found existing collection of heroes");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== heroes.length) {
      console.log("Collection has diff number of docs than data");
      console.log("Deleting collection");
      await typesense.collections("heroes").delete();
    }
  } catch (err) {
    console.error(err);
  }
  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));
  await typesense.collections().create(schema);
  console.log("Populating superheroes collection data...");
  try {
    const returnData = await typesense
      .collections("heroes")
      .documents()
      .import(heroes);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();
