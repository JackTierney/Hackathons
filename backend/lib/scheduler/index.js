import pg from '../psql/client.js'
import {sendFormLink} from '../message/index.js'
import schedule from 'node-schedule'

const HOST = process.env.HOST || 'http://localhost'

export default () => {
  schedule.scheduleJob('15,30,45,55 13,14,15,16 * * *', () => {
    console.log('scheduleJob running')
    pg((err, client, done) => {
      if (err) return console.error('error fetching client from pool', err)
      client.query(
        'SELECT branch_id, first_name, phone FROM contacts ' +
        'WHERE branch_id IN ' +
        '(SELECT branch_id from branch_services ' +
        'WHERE branch_services.last_updated < CURRENT_TIMESTAMP - INTERVAL \'12 hours\')',
        (error, result) => {
          if (error) throw error
          result.rows.forEach((rowObj) => {
            var url = HOST + '/update/' + rowObj.branch_id
            var body = 'Hello, ' +
              rowObj.first_name +
              '. Please click the link to update your service details: ' + url
            sendFormLink(rowObj.phone, body)
          })
          done()
        }
      )
    })
  })
}
