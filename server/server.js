const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '2f21dab7afaf4ea3ad0fc3bc23daa7c8',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log("server hosted")

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.HTML'))
})

app.get('/css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/style.css'))
})

app.get('/js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
})

app.listen(4000, console.log(`App running on 4000`)) 