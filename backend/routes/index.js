const express = require('express')
const getData = require('./getData.js')
const router = express.Router()

router.use('/getdata', getData)

module.exports = router