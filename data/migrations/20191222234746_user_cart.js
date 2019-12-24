exports.up = function(knex) {
  return (
    knex.schema
      .createTable('user_cart', uc => {
        uc.increments()
        uc.integer('user_id')
          .notNullable()
          .unique()
          .references('user.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
      .createTable('cart_item', ci => {
        ci.increments()
        ci.integer('cart_id')
          .notNullable()
          .references('user_cart.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        ci.integer('item_id')
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
      .dropTableIfExists('user_cart')
      .dropTableIfExists('cart_item')
  )
};
