require('dotenv').config()


module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/farm_fresh.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'sqlite3',
    connection: { filename: './data/farm_fresh.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    // client: 'pg',
    // connection: process.env.DATABASE_URL,
    // useNullAsDefault: true,
    // migrations: {
    //   directory: './data/migrations',
    //   tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  }
};

