import pg from 'pg'

const connection = {
  user: 'elias',
  database: 'hsa'
}

export default (cb) => pg.connect(connection, cb)
