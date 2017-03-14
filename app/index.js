'use strict'
const express = require('express')
const _ = require('lodash')

let app = express()
app.set('views', __dirname + '/views')

app.enable('view cache')

app.engine('.hbs', require('express-handlebars')({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        result: _.result,
        not: function(input) {
            return !input
        },
        equals: function(input, compare) {
            if (compare.constructor === Array) {
                return compare.indexOf(input) !== -1
            }
            return (input === compare)
        },
        empty: function(input) {
            return _.isEmpty(input)
        }
    }
}))

app.set('view engine', '.hbs')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(require('./router'))

// finally the not-found route
app.use(require('./controllers/not-found/router'))

// Export the app instance for unit testing via supertest
module.exports = app