const router = require('express').Router();

const Produce = require('../produce/produceModel');

router.get('/', async (req, res) => {
  const produce = await Produce.find()
  res.status(200).json(produce)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  let produce = await Produce.findById(id)
  res.status(200).json(produce)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  let produce = await Produce.findById(id)
  await Produce.del(id)
  res.status(200).json(({ message: `Produce Item with the ID of ${user.id} has been removed` }))
})

router.put('/:id', async (req, res) => {
  const changes = req.body
  let produce = await Produce.update(changes, id)  
  res.status(200).json(produce)
})

router.post('/:id', async (req, res) => {
  const newItem = req.body
  const addedItem = await Produce.add(newItem)
  res.status(200).json(addedItem)
})

router.post
module.exports = router