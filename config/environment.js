const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/tred-blog'
const secret = process.env.SECRET || 'Secret key'

module.exports = { port, dbURI, secret }
