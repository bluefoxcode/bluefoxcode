'use strict'
process.env.TESTING = true
const app = require('./index')
const request = require('supertest')
module.exports = request(app)