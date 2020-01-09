const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findProfile,
  findLocation
};

function find() {
  return db('user').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('user').where(filter);
}

async function add(user) {
  const id = await db('user').insert(user);
  return id[0]
   
}

function findById(id) {
  return db('user')
    .where({ id })
    .first();
}

async function findProfile(id) {
  const profiles = await db('user_profile')
    
  const profile = profiles
    .filter(u => u.user_id == id)[0]
  
  return { ...profile, is_grower: !!profile.is_grower }
   
}
      
async function findLocation(id) {
  const location = await db('location')
    
  return location
    .filter(u => u.user_id == id)[0]
}