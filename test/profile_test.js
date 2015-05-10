'use strict';

require('../index.js');

var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('profile API', function() {

  it('should make a new user profile', function (done) {
    chai.request('localhost:3000')
      .post();
  });




});
