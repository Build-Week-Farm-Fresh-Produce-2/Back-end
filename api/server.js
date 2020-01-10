const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router')
const produceRouter = require('../produce/produce-router')

const authMiddleware = require('../auth/authenticateMiddleware')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authMiddleware, usersRouter)
server.use('/api/produce', authMiddleware, produceRouter)

server.get('/', (req, res) => {
  res.json("API Working")
})

module.exports = server;