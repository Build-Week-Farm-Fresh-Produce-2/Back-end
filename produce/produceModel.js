const db = require('../data/dbConfig');

module.exports = {
  add,
  del,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db('produce').select('id', 'name', 'description');
}

function findBy(filter) {
  return db('produce').where(filter);
}

async function add(item) {
  const id = await db('produce').insert(item);
  return id[0]   
}

async function del(id) {
  const produceCount = await db('produce').where('id', id).del();
  return produceCount
}

function findById(id) {
  return db('produce')
    .where({ id })
    .first();
}

async function update(changes, id) {
  const updatedProduce = await db('produce').where('id', id).update(changes)
  return updatedProduce
}
  

