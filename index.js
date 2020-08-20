const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')

const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://localhost/articles'

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	family: 4,
}

mongoose.connect(MONGODB_URI, options)

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.listen(port, () => console.log(`running on port ${port}`))
