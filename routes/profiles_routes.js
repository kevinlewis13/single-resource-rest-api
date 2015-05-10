'use strict';

var Profile = require('../models/Profile');

var bodyparser = require('body-parser');

var errorResponse = function(err, res) {
console.log(err);
return res.status(500).json({msg: 'server isn\'t playing nice'});
};

module.exports = function (router) {
  router.use(bodyparser.json());

  router.get('/profiles', function (req, res) {
    Profile.find({}, function (err, data) {
      if (err) {
        errorResponse(err, res);
      }
      res.json(data);
    });
  });

  router.post('/profiles', function (req, res) {
    var newProfile = new Profile(req.body);
    newProfile.save(function (err, data) {
      if (err) {
        errorResponse(err, res);
      }
      res.json(data);
    });
  });

  router.put('/profiles', function (req, res) {
    var updatedProfile = req.body;
    delete updatedProfile._id;

    Profile.update({'_id': req.params.id}, updatedProfile, function (err, data) {
      if (err) {
        errorResponse(err, res);
      }
      res.json({msg: 'updated successfully'});
    });
  });

  router.delete('/profiles/:id', function (req, res) {
    Profile.remove({'_id': req.params.id}, function (err, data) {
      if (err) {
        errorResponse(err, res);
      }
      res.json({msg: 'deleted successfully'});
    });
  });
};
