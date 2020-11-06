exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "conference room", description: "resource number 1" },
        { id: 2, name: "microphone", description: "resource number 2" },
        { id: 3, name: "computer", description: "resource number 3" },
      ]);
    });
};
