require('dotenv').config();
const { Pool } = require('pg')

const pool = new Pool({
  connenctionSring: process.env.DATABASE_URL,
  ssl: true
})

const server = require('./api/server');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n=== Server running on PORT: ${port} ===\n`));

module.exports = server