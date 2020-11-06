exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 128).notNullable();
      tbl.string("note", 128);
    })
    .createTable("project_tasks", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks");
      tbl.boolean("task_completed").notNullable().defaultTo(false);
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("project_tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
