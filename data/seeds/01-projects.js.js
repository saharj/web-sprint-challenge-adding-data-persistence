exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Project 1",
          description: "This is the first project.",
          completed: "false",
        },
        { id: 2, name: "Project 2", description: "", completed: "false" },
        {
          id: 3,
          name: "Project 3",
          description: "This is the third project.",
          completed: "false",
        },
      ]);
    });
};
