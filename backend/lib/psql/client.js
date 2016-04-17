import pg from 'pg'

let connection = ''

if (process.env.DATABASE_URL) {
  connection = process.env.DATABASE_URL + '?ssl=true'
} else {
  connection = {
    user: process.env.DB_USER || 'elias',
    database: process.env.DB_NAME || 'hsa',
    password: process.env.DB_PASSWORD || null,
    port: process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || 'localhost',
  }
}

console.log('Connection info: ', connection)

export default (cb) => pg.connect(connection, cb)
