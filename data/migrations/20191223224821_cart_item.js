exports.up = function(knex) {
  return (
    knex.schema
      .createTable('cart_item', ci => {
        ci.increments()
        ci.integer('inventory_item_id')
          .notNullable()
          .references('inventory_item.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        ci.integer('quantity')
          .notNullable()
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('cart_item')
  )
};