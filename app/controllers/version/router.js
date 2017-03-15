'use strict'
let appVersion = require('../../../package.json').version

function viewRoute(req, res) {
    return res.status(200).send(appVersion)
}

module.exports = viewRoute