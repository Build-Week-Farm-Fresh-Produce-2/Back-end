
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {id: 1, user_id: 1, first_name: 'Billy', last_name: 'Young', is_grower: false, email: 'byoung@gmail.com'},
        {id: 2, user_id: 2, first_name: 'Bonnie', last_name: 'Wilder', is_grower: false, email: 'wildbonnie@yahoo.com'},
        {id: 3, user_id: 3, first_name: 'Bobby', last_name: 'Bouche', is_grower: true, email: 'runbobbyrun@gmail.com'},
        {id: 4, user_id: 4, first_name: 'Barry', last_name: 'Boggins', is_grower: false, email: 'bb126721@hoymail.com'},
        {id: 5, user_id: 5, first_name: 'Boyd', last_name: 'Crowder', is_grower: true, email: 'getraylon@gmail.com'}
      ]);
    });
};
