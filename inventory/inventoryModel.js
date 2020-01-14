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
  return db('inventory_item');
}

function findBy(filter) {
  return db('inventory_item').where(filter);
}

async function add(item) {
  const filteredItem = filteredObj(item, "user_id")
  const id = await db('inventory_item').insert(filteredItem);
  const userInventoryItem = { user_id: item.user_id, inventory_item_id: id[0] }
  await db('user_inventory').insert(userInventoryItem)
  const newItem = db('inventory_item').where('id', id).first()
  const returnedItem = { ...userInventoryItem, item: newItem }
  return returnedItem
}

function filteredObj(obj, prop) {
  let newObj = {}
  for (let key in obj) {
    if (key !== prop) {
      newObj[key] = obj[key]
    }
    console.log(newObj)
  }
  return newObj
}

async function del(id) {
  const inventoryCount = await db('inventory_item').where('id', id).del();
  return inventoryCount
}

function findById(id) {
  return db('inventory_item')
    .where({ id })
    .first();
}

async function update(changes, id) {
  const updatedInventory = await db('inventory_item').where('id', id).update(changes)
  return updatedInventory
}