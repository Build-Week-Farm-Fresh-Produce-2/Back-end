
exports.up = function(knex) {
  return (
    knex.schema
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
        up.integer('location_id')
          .unique()
          .references('location.id')        
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        })
      .createTable('location', l => {
        l.increments()
        l.integer('user_id')
          .notNullable()
          .unique()
          .references('user.id')        
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        l.integer('user_profile_id')
          .notNullable()
          .unique()
          .references('user_profile.id')        
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        l.integer('addr_no')
        l.string('street')
        l.string('city')
        l.string('state')
        l.integer('zip_code')
        l.string('geo-location')

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