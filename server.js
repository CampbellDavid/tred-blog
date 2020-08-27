require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const { port, dbURI } = require('./config/environment')
const router = require('./config/router')
const cors = require('cors')

mongoose.connect(
	dbURI,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	(err) => {
		if (err) return console.log(err)
		console.log('Mongo Connected')
	}
)

mongoose.connection.on('connected', () => {
	console.log('Mongoose is ON')
})

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(morgan('tiny'))

app.use('/api', router)

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app
