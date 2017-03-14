'use strict'
const expect = require('chai').expect;
const app = require('../../test-app')

describe('not-found handler', function() {
    describe("GET /InvalidRoute", function() {
        it('should return not-found', function(done) {
            app.get('/InvalidRoute')
                .end(function(err, response) {
                    if (err) return done(err);
                    expect(response.res.statusCode).to.equal(404)
                    expect(response.res.statusMessage).to.equal('Not Found')
                    done()
                })

        })
    })
})