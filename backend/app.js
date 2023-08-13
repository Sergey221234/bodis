const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')
require('dotenv').config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.use(cors())
app.use(router)




app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})