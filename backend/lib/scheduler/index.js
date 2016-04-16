import pg from 'pg'
import sendFormLink from '../message/index.js'
import schedule from 'node-schedule'

const connectionDetails = {username: process.env.DBUSER, password: process.env.DBPWD, database: process.env.DB}

const query = {
	text: "SELECT branch_id, first_name, phone FROM contacts WHERE branch_id IN (
SELECT branch_id from branch_services WHERE branch_services.last_updated < CURRENT_TIMESTAMP - INTERVAL '1 days')"",
}

var messageScheduler = schedule.scheduleJob('* * 10 * *', function(){
  pg.connect(connectionDetails, function(err, client, done) {
    if(err) {
    	return console.error('error fetching client from pool', err);
  	}
    client.query(query, function(err, result) {
  		result.rows.forEach(function (rowObj) {
  			var url = process.env.HOST + '/update/' + rowObj.branch_id
  			var body = 'Hello, '+ rowObj.first_name +'. Please click the link to update your service details.' + url
  			sendFormLink(rowObj.phone, body)
  	})
  })
});



pg.connect(connectionDetails, function(err, client, done){
	if(err) {
  	return console.error('error fetching client from pool', err);
	}

})
