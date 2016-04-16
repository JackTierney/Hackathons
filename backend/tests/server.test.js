const tape = require('wrapping-tape')
const createServer = require('../dist/server.js').default

var server = null

const tests = tape({
  setup: (t) => {
    server = createServer()
    t.end()
  },

  teardown: (t) => {
    server.stop()
    t.end()
  }
})

tests('Check server running', (t) => {
  server.inject({method: 'GET', url: '/'}, (res) => {
    t.equal(res.statusCode, 200, 'Assert successful response')
    t.end()
  })
})

tests('Check branches endpoint', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/branch/1',
    payload: {
      beds: 1,
      servingFood: false,
    },
  }, (res) => {
    t.equal(JSON.parse(res.payload).success, true, 'Assert successfully connected')
    t.end()
  })
})
