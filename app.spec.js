process.env.NODE_ENV = 'development';

const should = require('should'),
    request = require('supertest'),
    app = require('./index');

describe('GET Teams list ', function() {

    it('should fetch teams list', function(done) {
      this.timeout(50000);
      request(app)
        .get('/api/teams')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            var allTeams = res.body;
            allTeams.length.should.equal(4);

            done();
        });
    });

});
