'use strict';

module.exports = function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attributes, controller) {
      controller.$parsers.unshift(function (name) {
        var valid = name && name.indexOf(' ') !== -1;
        controller.$setValidity('fullName', valid);
        if (valid) return name;
      });
    }
  };
}
