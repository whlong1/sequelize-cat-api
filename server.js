const express = require('express')
const logger = require('morgan')
const cors = require("cors")

// import routers
const indexRouter = require('./routes/index.js')

// Initialize app 
const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// Mounted Routers
app.use('/', indexRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = {
  app
}