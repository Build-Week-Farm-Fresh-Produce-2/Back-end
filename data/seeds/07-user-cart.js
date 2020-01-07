
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_cart').insert([
        {id: 1, user_id: 1, cart_item_id: 1},
        {id: 2, user_id: 1, cart_item_id: 2},
        {id: 3, user_id: 1, cart_item_id: 3}
      ]);
    });
};
