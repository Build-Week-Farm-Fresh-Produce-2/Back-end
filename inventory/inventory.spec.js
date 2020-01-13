const Inventory = require('./inventoryModel')
import db from '../data/dbConfig'
require('regenerator-runtime/runtime')

describe('inventory model', () => {
  describe('make one', () => {
    it('should add a new inventory item to the db', async () => {
      await Inventory.add({ user_id: 3, produce_id: 1, user_description: "From West Tennessee", item_name: "Ripley Tomatoes", quantity: 35 })

      const inventory = await db('inventory_item')
      expect(inventory).toHaveLength(1)
    })    
  })

  beforeEach(async () => {
    await db('inventory_item').delete()
    await db('user_inventory').delete()
  })

})
