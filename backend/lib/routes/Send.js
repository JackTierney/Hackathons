import zensend from 'zensend'

const client = new zensend.Client('Tw40TCl18EDda8eLW5hxMw')

export default {
  path: '/sendSms',
  method: 'GET',
  handler: (req, reply) => {
    client.sendSms({
      originator: 'SPINTOWIN',
      body: 'Hello Jack, Elias and Taz, this is a test message',
      numbers: ['447732955369', '447415583356', '447789623006']
    }, (error, res) => {
      if (error) return reply({success: false, data: error})
      return reply({success: true, data: res})
    })
  }
}
