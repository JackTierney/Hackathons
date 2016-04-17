require('env2')('./config.env')
import zensend from 'zensend'

const client = new zensend.Client(process.env.ZENSEND)

export const sendFormLink = (number, body) => {
  console.log('Sending message to ' + number + ' with body: ', body)
  client.sendSms({
    originator: 'FAC',
    body: body,
    numbers: [number]
  }, (error, response) => {
    if (error) {
      console.log('error', error)
    } else {
      console.log('message sent to ' + number)
      console.log('response', response)
    }
  })
}
