import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router')

const authMiddleware = require('../auth/authenticateMiddleware')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authMiddleware, usersRouter)

server.get('/', (req, res) => {
  res.json("API Working")
})

module.exports = server;