'use strict';

require('angular').module('bd.names', [])
  .directive('fullName', require('./full-name'));

module.exports = 'bd.names'
