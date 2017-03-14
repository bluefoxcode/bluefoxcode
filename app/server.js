#!/usr/bin/env node

'use strict'
require('dotenv').config({ silent: true })
const app = require('./index')
const config = require('../app/config')
const bole = require('bole')

bole.output({
    level: 'debug',
    stream: process.stdout
})

let log = bole('server')

log.info('server process starting')

app.listen(config.express.port, config.express.ip, function(error) {
    if (error) {
        log.error('Unable to listen for connections', error)
        process.exit(10)
    }
    log.info('express is listening on http://' +
        config.express.ip + ':' + config.express.port)
})