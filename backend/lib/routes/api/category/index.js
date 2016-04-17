import pg from '../../../psql/client.js'

export const get = {
  method: 'GET',
  path: '/api/category',
  handler: (req, reply) => {

      pg((error, client, done) => {
        if (error) throw error
        client.query(
          'SELECT ' +
          'b.branch_name, c.category_type' +
          'FROM branch_category bc INNER JOIN categories c' +
          'ON c.category_id = bc.category_id' +
          'INNER JOIN branches b' +
          'ON b.branch_id = bc.branch_id',
          (err, result) => {
            if (err) throw err
            reply({success: true, data: result.rows})
            done()
          }
        )
      })

  }
}
