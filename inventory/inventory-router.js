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
  let inventory = await Inventory.findById(id)
  await Inventory.del(id)
  res.status(200).json(({ message: `Inventory Item with the ID of ${inventory.id} has been removed` }))
})

router.put('/:id', async (req, res) => {
  const changes = req.body
  let inventory = await Inventory.update(changes, id)  
  res.status(200).json(inventory)
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newItem = req.body
    console.log(newItem)
    const addedItem = await Inventory.add(newItem)
    res.status(200).json(addedItem)
  } catch (err) {
    res.status(500).json({ errormESSAGE: ERR })
  }
})

module.exports = router