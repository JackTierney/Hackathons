import pg from '../../../psql/client.js'

export const get = {
  method: 'GET',
  path: '/api/branch/{id?}',
  handler: (req, reply) => {
    console.log("in handler");
    if (req.params.id) {
      pg((error, client, done) => {
        if (error) throw error
        client.query(
          'SELECT ' +
          'branches.branch_name, branch_info.address, branch_info.opening_hours, ' +
          'branch_info.email, branch_info.phone, branch_info.postcode, branch_info.latitude, ' +
          'branch_info.longitude, branch_services.serving_food, branch_services.beds ' +
          'FROM branches INNER JOIN branch_info ON branches.branch_id = branch_info.branch_id ' +
          'INNER JOIN branch_services ON branch_services.branch_id = branches.branch_id ' +
          'WHERE branches.branch_id=$1',
          [req.params.id],
          (err, result) => {
            if (err) throw err
            reply({success: true, data: result.rows})
            done()
          }
        )
      })
    } else {
      pg((error, client, done) => {
        if (error) throw error
        console.log("fdlshglhg");
        client.query(
          'SELECT ' +
          'branches.branch_name, branch_info.address, branch_info.opening_hours, ' +
          'branch_info.email, branch_info.phone, branch_info.postcode, branch_info.latitude, ' +
          'branch_info.longitude, branch_services.serving_food, branch_services.beds ' +
          'FROM branches INNER JOIN branch_info ON branches.branch_id = branch_info.branch_id ' +
          'INNER JOIN branch_services ON branch_services.branch_id = branches.branch_id'
        , [], (err, result) => {
          if (err) throw err
          reply({success: true, data: result.rows})
          done()
        })
      })
    }
  }
}

export const post = {
  method: 'POST',
  path: '/api/branch/{id}',
  handler: (req, reply) => {
    const now = new Date(Date.now())
    const timestamp = now.toISOString()

    pg((error, client, done) => {
      if (error) throw error
      client.query(
        'SELECT * FROM branch_services WHERE branch_id=$1',
        [req.params.id],
        (err1, result1) => {
          if (result1.rows.length > 0) {
            client.query(
              'UPDATE branch_services SET (beds,serving_food,last_updated)=($1,$2,$3) ' +
              'WHERE branch_id=$4',
              [req.payload.beds+0, !!req.payload.servingFood, timestamp, req.params.id],
              (err2, result2) => {
                done()
                if (err2) return reply({success: false, data: err2})
                return reply({success: true, data: result2})
              }
            )
          }
          console.log('NO RESULTS')
        }
      )
    })
  }
}
