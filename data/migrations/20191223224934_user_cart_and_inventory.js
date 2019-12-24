exports.up = function(knex) {
  return (
    knex.schema
    .createTable('user_inventory', uc => {
      uc.increments()
      uc.integer('user_id')
        .notNullable()
        .unique()
        .references('user.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      uc.integer('inventory_item_id')
        .notNullable()
        .unique()
        .references('inventory_item.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
      .createTable('user_cart', uc => {
        uc.increments()
        uc.integer('user_id')
          .notNullable()
          .unique()
          .references('user.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        uc.integer('cart_item_id')
          .notNullable()
          .unique()
          .references('cart_item.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('user_cart')
      .dropTableIfExists('user_inventory')
  )
};