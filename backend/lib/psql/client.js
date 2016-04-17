require('env2')('./config.env')
import pg from 'pg'


let connection = ''

if (process.env.DB_URL) {
  connection = process.env.DB_URL
} else {
  connection = {
    user: process.env.DB_USER || 'elias',
    database: process.env.DB_NAME || 'hsa',
    password: process.env.DB_PASSWORD || null,
    port: process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || 'localhost',
    ssl: true,
  }
}
console.log(connection)
export default (cb) => pg.connect(connection, cb)
