exports.up = function(knex) {
  return (
    knex.schema
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
      .dropTableIfExists('inventory_item')
  )
};