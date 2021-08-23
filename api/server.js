const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const router = require('./category/category-router.js')

const server = express()

server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/api/category', router)

server.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = server
