var request = require('supertest'),
  should = require('chai').should(),
  async = require('async'),
  app = require('../app'),
  api = request(app),
  userService = require('../services/userService');

describe('# User Authentication Test #', function() {
  before(function() {
    userService.logout();
  });

  describe('## Under unlogin state ##', function() {
    it('user session should be null', function(done) {
      api
        .get('/user')
        .expect(200, function(err, res) {
          should.equal(res.body, null)
          done(err);
        });
    });

    it('forbid to access POST/PUT/DELETE /msg', function(done) {
      async.series([
        function (cb) { api.post('/msg').expect(401, cb) },
        function (cb) { api.put('/msg/:msgId').expect(401, cb) },
        function (cb) { api.del('/msg/:msgId').expect(401, cb) }
      ], done)
    });

    it('forbid to logout', function(done) {
      api.get('/logout').expect(401, done);
    });
  });

  describe('## Under login state ##', function() {
    it('login test', function(done) {
      api
        .post('/login')
        .send({ username: 'ken' })
        .expect(200, function(err, res) {
          res.body.username.should.equal('ken');
          done(err);
        })
    });

    it('forbid to login again', function(done) {
      api
        .post('/login')
        .send({ username: 'whatever' })
        .expect(403, done);
    });

    it('logout test', function(done) {
      api.get('/logout').expect(200, done);
    });
  });

});
