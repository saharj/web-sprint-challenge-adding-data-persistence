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

Router.post("/tasks", (req, res) => {
  ProjectDb.addTask(req.body)
    .then((tasks) => {
      res.status(201).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding task" });
    });
});

Router.post("/projects", (req, res) => {
  ProjectDb.addProject(req.body)
    .then((projs) => {
      res.status(201).json(projs);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding project" });
    });
});

Router.post("/resources", (req, res) => {
  ProjectDb.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding resource" });
    });
});

module.exports = Router;
