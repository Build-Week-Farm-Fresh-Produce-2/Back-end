const router = require('express').Router();

const Users = require('../users/usersModel');

router.get('/', async (req, res) => {
  const users = await Users.find()
  res.status(200).json(users)
})

module.exports = router