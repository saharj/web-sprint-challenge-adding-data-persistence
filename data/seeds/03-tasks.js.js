exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, description: "First thing to do", note: "High priority" },
        { id: 2, description: "some other thing to do", note: "" },
        { id: 3, description: "Another task", note: "Low Priority" },
      ]);
    });
};
