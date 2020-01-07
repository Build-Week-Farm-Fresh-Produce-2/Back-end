
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'Billy', password: "password"},
        {id: 2, username: 'Bonnie', password: "password"},
        {id: 3, username: 'Bobby', password: "password"},
        {id: 4, username: 'Barry', password: "password"},
        {id: 5, username: 'Boyd', password: "password"}
      ]);
    });
};
