const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'Billy', password: bcrypt.hashSync("password", 10)},
        {id: 2, username: 'Bonnie', password: bcrypt.hashSync("password", 10)},
        {id: 3, username: 'Bobby', password: bcrypt.hashSync("password", 10)},
        {id: 4, username: 'Barry', password: bcrypt.hashSync("password", 10)},
        {id: 5, username: 'Boyd', password: bcrypt.hashSync("password", 10)}
      ]);
    });
};
