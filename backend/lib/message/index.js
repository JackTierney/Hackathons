require('env2')('./config.env')
import zensend from 'zensend'

const client = new zensend.Client(process.env.ZENSEND)

export const sendFormLink = (number, body) => {
  client.sendSms({
    originator: 'FAC',
    body: body,
    number: number
  }, (error, response) => {
    if (error) {
      console.log('error', error)
    } else {
      console.log('message sent to ' + number)
      console.log('response', response)
    }
  })
}
