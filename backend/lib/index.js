require('env2')('./config.env')
import createServer from './server.js'

const server = createServer()

server.start((err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
})
