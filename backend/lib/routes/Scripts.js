import path from 'path'
import fs from 'fs'

export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (req, reply) => {
    const p = path.join(__dirname, '..', '..', '..', 'public', req.path)
    const stats = fs.statSync(p)
    console.log('This is my P: ', p)
    console.log('P is a file?: ', stats.isFile())
    console.log('P is a dir?: ', stats.isDirectory())
    reply.file(p)
  }
}
