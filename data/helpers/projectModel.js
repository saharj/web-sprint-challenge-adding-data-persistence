const db = require("../db-config");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks as t")
    .leftJoin("project_tasks as pt", "pt.task_id", "t.id")
    .leftJoin("projects as p", "pt.project_id", "p.id")
    .select(
      "t.id",
      "t.description",
      "t.note",
      "p.name as Project_name",
      "p.description as Project_description"
    )
    .then((tasks) => {
      if (tasks) {
        return tasks;
      } else {
        return Promise.resolve(null);
      }
    });
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(() => getTasks());
}

function addProject(proj) {
  return db("projects")
    .insert(proj)
    .then(() => getProjects());
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(() => getResources());
}

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addTask,
  addProject,
  addResource,
};
