const router = require('express').Router();

const Inventory = require('../inventory/inventoryModel');

router.get('/', async (req, res) => {
  const inventory = await Inventory.find()
  res.status(200).json(inventory)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  let inventory = await Inventory.findById(id)
  res.status(200).json(inventory)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  let produce = await Produce.findById(id)
  await Produce.del(id)
  res.status(200).json(({ message: `Produce Item with the ID of ${produce.id} has been removed` }))
})

router.put('/:id', async (req, res) => {
  const changes = req.body
  let inventory = await Inventory.update(changes, id)  
  res.status(200).json(inventory)
})

router.post('/:id', async (req, res) => {
  const newItem = req.body
  const addedItem = await Inventory.add(newItem)
  res.status(200).json(addedItem)
})

module.exports = router