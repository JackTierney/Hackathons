import path from 'path'

export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (req, reply) => {
    const p = path.join(__dirname, '..', '..', '..', 'public', req.path)
    reply.file(p)
  }
}
