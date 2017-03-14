'use strict'
const expect = require('chai').expect;
const MockExpress = require('mock-express')
const app = MockExpress()
const view = require('./router')

describe('Views: home', function() {
    var req, res;
    beforeEach(function() {
        // Make the request
        req = app.makeRequest();

        // Setup the response
        res = app.makeResponse();

        res.render = function(template) {
            return template;
        };
    });
    describe('GET', function() {
        it('should call view.render', function(done) {
            res.render = function(template) {
                expect(template).to.equal('home')
                done()
            }
            view(req, res)
        })
    })
})