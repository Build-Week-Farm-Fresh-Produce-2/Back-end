
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('produce', p => {
        p.increments()
        p.string('name', 255)
          .notNullable()
          .unique()
        p.string('description', 255)
          .notNullable()
          .unique()
        p.string('unit_of_measure', 255)
          .notNullable()
        p.string('default_img', 255)
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('produce')
  )
};
