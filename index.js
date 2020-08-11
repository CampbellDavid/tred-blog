const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) return console.log(error)
    console.log('connected to Mongo')
  })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`running on port ${port}`))