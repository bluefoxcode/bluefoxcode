'use strict'

function viewRoute(req, res) {
    let options = {
        layout: 'default'
    }
    return res.render('home', options)
}

module.exports = viewRoute