
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory_item').insert([
        {id: 1, produce_id: 1, user_description: 'Hot-house grown, on the vine', item_name: 'Roma Tomatoes', quantity: 30},
        {id: 2, produce_id: 2, user_description: 'Small variety, great for pickling', item_name: 'Hierloom Cucumbers', quantity: 65},
        {id: 3, produce_id: 3, user_description: 'Tender and fresh', item_name: 'Napa Cabbage', quantity: 15},
        {id: 4, produce_id: 4, user_description: 'Pre-washed and bagged', item_name: 'Romaine Lettuce', quantity: 20},
        {id: 5, produce_id: 10, user_description: 'Sweet and tangy', item_name: 'Granny Smith Apples', quantity: 120},
        {id: 6, produce_id: 7, user_description: 'Great for stews', item_name: 'Yellow Squash', quantity: 30}
      ]);
    });
};
