const db = require("../db-config");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("project_tasks as pt")
    .join("tasks as t", "pt.task_id", "t.id")
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

module.exports = { getProjects, getResources, getTasks, addTask };
