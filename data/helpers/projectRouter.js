const express = require("express");

const ProjectDb = require("./projectModel");

const Router = express.Router();

Router.get("/projects", (req, res) => {
  ProjectDb.getProjects()
    .then((projs) => {
      res.status(200).json(projs);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting projects" });
    });
});

Router.get("/resources", (req, res) => {
  ProjectDb.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting resources" });
    });
});

Router.get("/tasks", (req, res) => {
  ProjectDb.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting tasks" });
    });
});

module.exports = Router;
