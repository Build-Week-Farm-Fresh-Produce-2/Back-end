
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cart_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart_item').insert([
        {id: 1, inventory_item_id: 1, quantity: 4},
        {id: 2, inventory_item_id: 4, quantity: 2},
        {id: 3, inventory_item_id: 6, quantity: 6}
      ]);
    });
};
