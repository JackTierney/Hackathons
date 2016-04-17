import path from 'path'

export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (req, reply) => {
    reply.file(path.join(__dirname, '..', '..', '..', 'public', req.path))
  }
}
