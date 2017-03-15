'use strict'
const express = require('express')
const join = require('path').join

const router = new express.Router()

router.use(express.static(join(__dirname, '../public')))


router.get('/', require('./controllers/home/router'))
router.get('/version', require('./controllers/version/router'))
    // router.get('/docs', require('./controllers/docs/default/route'))


module.exports = router