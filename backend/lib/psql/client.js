import pg from 'pg'

const connection = {
  user: process.env.DB_USER || 'elias',
  database: process.env.DB_NAME || 'hsa',
  password: process.env.DB_PASSWORD || null,
  port: process.env.DB_PORT || 5432,
  host: process.env.DB_HOST || 'localhost',
}

export default (cb) => pg.connect(connection, cb)
