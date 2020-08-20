const env = process.env.NODE_ENV || 'api-development'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/tred-blog-${env}`
const secret = process.env.SECRET || 'Secret key'

console.log({ env, port, dbURI, secret })

module.exports = { port, dbURI, secret }
