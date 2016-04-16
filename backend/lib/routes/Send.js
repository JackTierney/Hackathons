import pg from 'pg'
import sendFormLink from '../message/index.js'

const connectionDetails = {username: process.env.DBUSER, password: process.env.DBPWD, database: process.env.DB}
const branchId = 1
const query = {
	text: 'SELECT first_name, phone FROM contacts WHERE branch_id = $1',
	values: [branchId]
}

pg.connect(connectionDetails, function(err, client, done){
	if(err) {
  	return console.error('error fetching client from pool', err);
	}
	client.query(query, function(err, result) {
		result.rows.forEach(function (rowObj) {
			var url = process.env.HOST + '/update/' + branchId
			var body = 'Hello, '+ rowObj.first_name +'. Please click the link to update your service details.' + url
			sendFormLink(body, rowObj.phone)
	})
})
