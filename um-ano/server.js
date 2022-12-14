const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(process.env.PORT || 8080, () => {
  console.log('server start')
})
