const router = require('express').Router();

const Users = require('../users/usersModel');

router.get('/', async (req, res) => {
  const users = await Users.find()
  res.status(200).json(users)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  let user = await Users.findById(id)
  const profile = await Users.findProfile(id)
  const location = await Users.findLocation(id)
  res.status(200).json({ ...user, profile: profile, location: location })
})

module.exports = router