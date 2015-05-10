'use strict';

var mongoose = require('mongoose');

var profileSchema = mongoose.aSchema({
  name: String,
  about: String,
  available: Boolean
});

module.exports = mongoose.model('Profile', profileSchema);
