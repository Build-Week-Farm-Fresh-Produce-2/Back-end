exports.up = function(knex) {
  return (
    knex.schema
      .createTable('location', l => {
        l.increments()
        l.integer('user_id')
          .notNullable()
          .unique()
          .references('user.id')        
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        l.integer('addr_no')
        l.string('street')
        l.string('city')
        l.string('state')
        l.integer('zip_code')
        l.string('geo-location')
      })
      .createTable('user_profile', up => {
        up.increments()
        up.integer('user_id')
          .notNullable()
          .unique()
          .references('user.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        up.string('first_name', 255)
          .notNullable()
        up.string('last_name', 255)
          .notNullable()
        up.boolean('is_grower', false)
          .notNullable()
        up.string('email', 255)
          .notNullable()
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('user_profile')
      .dropTableIfExists('location')
  )
};