import path from 'path'

export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (req, reply) => {
    const p = path.join(__dirname, '..', '..', '..', 'public', req.path)
    console.log('This is my P: ', p)
    reply.file(p)
  }
}
