const express = require("express");

const ProjectRouter = require("./data/helpers/projectRouter");

const server = express();

server.use(express.json());
server.use("/api", ProjectRouter);

server.get("/", (req, res) => {
  res.send(`
      <h2>Let's write some middleware!</h2>
      <p>Here we are...</p>
      `);
});

module.exports = server;
