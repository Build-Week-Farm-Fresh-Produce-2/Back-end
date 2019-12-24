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
      .createTable('inventory_item', ci => {
        ci.increments()
        ci.integer('produce_id')
          .notNullable()
          .references('produce.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        ci.string('user_description', 255)
        ci.string('item_name', 255)
        ci.integer('quantity')
          .notNullable()
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('user_inventory')
      .dropTableIfExists('inventory_item')
  )
};