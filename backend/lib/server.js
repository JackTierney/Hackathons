import Hapi from 'hapi'

// helper methods
import {handlePlugins} from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'

// server routes
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'
import scheduler from './scheduler/index.js'

const Plugins = [Inert]
const Routes = [Images, ReactUrls, Scripts]

// Must export function that takes a two arguments: a config object, and the redis client
// Function must return an UNSTARTED server object
export default () => {

  const branch = require('./routes/api/branch/index.js')

  const server = new Hapi.Server()

  server.connection({
    port: process.env.PORT || 4000,
    routes: {
      cors: true
    }
  })

  server.register(Plugins, handlePlugins)
  server.route(Routes.concat([branch.post, branch.get]))

  scheduler()

  return server
}
