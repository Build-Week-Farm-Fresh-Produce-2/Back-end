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
    
  return profiles
    .filter(u => u.user_id === id)
    // const profile = profiles.reduce((p, u) => {
      //   if (u.user_id == id) {
        //     p.push(u)
        //   }
        //   return p
        // }, [])
        // return profile
        
}
      
async function findLocation(id) {
  const location = await db('location')
    
  return location
    .filter(u => u.user_id === id)
}