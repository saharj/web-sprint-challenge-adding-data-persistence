const db = require("../db-config");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks");
}

module.exports = { getProjects, getResources, getTasks };
