const { exec } = require("child_process");

const command = `docker run -d -p 8108:8108 -v\`pwd\`/typesense-server-data/:/data \
typesense/typesense:0.22.2 --data-dir /data --api-key=animesearch --listen-port 8108 --enable-cors`;

exec(command, (err) => {
  if (!err) console.log("Typesense Server is up and running...✰✨");

  if (err) {
    console.log("Error running server: ", err);
  }
});
