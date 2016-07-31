var request = require('supertest'),
  should = require('chai').should(),
  async = require('async'),
  app = require('../app'),
  api = request(app),
  userService = require('../services/userService');

describe('# Msg CURD Test #', function() {
  var msgId;

  before(function() {
    userService.login({ username: 'ken' });
  });

  after(function() {
    userService.logout();
  });

  it('should return a set of msgs', function(done) {
    api
      .get('/msg')
      .expect(200, function(err, res) {
        res.body.should.be.an('array');
        done(err);
      });
  });

  it('add a new msg', function(done) {
    api
      .post('/msg')
      .send({
        title: 'Hello World',
        content: 'This is a msg from Ken'
      })
      .expect(200, function(err, res) {
        msgId = res.body.id;
        msgId.should.be.a('string');
        res.body.title.should.equal('Hello World');
        res.body.content.should.equal('This is a msg from Ken');
        res.body.author.should.equal('ken');
        res.body.time.should.be.a('number');
        done(err);
      });
  });

  it('get a specific msg', function(done) {
    api
      .get('/msg/' + msgId)
      .expect(200, function(err, res) {
        res.body.should.be.an('object');
        done(err);
      });
  });

  it('update a specific msg', function(done) {
    api
      .put('/msg/' + msgId)
      .send({ content: 'update content' })
      .expect(200, function(err, res) {
        res.body.content.should.equal('update content');
        done(err);
      });
  });

  it('delete a specific msg', function(done) {
    api
      .del('/msg/' + msgId)
      .expect(200, function(err, res) {
        should.equal(res.body, true);
        done(err);
      });
  });

});
