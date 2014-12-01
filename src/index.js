'use strict';

module.exports = require('angular')
  .module('bd.names', [])
  .directive('fullName', require('./full-name'))
  .name;
