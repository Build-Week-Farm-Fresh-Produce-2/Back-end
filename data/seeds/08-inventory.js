
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_inventory').insert([
        {id: 1, user_id: 3, inventory_item_id: 3},
        {id: 2, user_id: 3, inventory_item_id: 4},
        {id: 3, user_id: 3, inventory_item_id: 1},
        {id: 4, user_id: 5, inventory_item_id: 2},
        {id: 5, user_id: 5, inventory_item_id: 5},
        {id: 6, user_id: 5, inventory_item_id: 6}
      ]);
    });
};
