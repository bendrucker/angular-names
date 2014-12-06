'use strict';

module.exports = function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attributes, ngModelController) {
      ngModelController.$validators.fullName = function (modelValue) {
        return !!modelValue && modelValue.indexOf(' ') !== -1;
      };
    }
  };
}
