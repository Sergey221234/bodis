const express = require('express')
const getData = require('../controllers/postData.js')
const getdataRouter = express.Router()

getdataRouter.post('/', getData)

module.exports = getdataRouter