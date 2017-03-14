'use strict'

function viewRoute(req, res) {
    return res.status(404).send(' NOT FOUND')
}

module.exports = viewRoute