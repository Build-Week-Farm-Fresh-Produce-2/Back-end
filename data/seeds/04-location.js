exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {id: 1, user_id: 1, addr_no: 1267, street: 'Parkland Ave', city: 'Burlington', state: 'KY', zip_code: 32485},
        {id: 2, user_id: 2, addr_no: 9283, street: 'Gilmore Rd', city: 'Hartfprd', state: 'MS', zip_code: 51987},
        {id: 3, user_id: 3, addr_no: 2938, street: 'Parkland Ave', city: 'Newbern', state: 'AZ', zip_code: 28461},
        {id: 4, user_id: 4, addr_no: 654, street: 'Parkland Ave', city: 'Homewood', state: 'RI', zip_code: 76492},
        {id: 5, user_id: 5, addr_no: 5644, street: 'Parkland Ave', city: 'Newark', state: 'WY', zip_code: 64825}
      ]);
    });
};
