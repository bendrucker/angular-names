'use strict';

var angular = require('angular');

describe('angular-names', function () {

  beforeEach(angular.mock.module(require('../')));

  describe('full-name', function () {

    var scope, element, controller;
    beforeEach(angular.mock.inject(function ($compile, $rootScope) {
      scope      = $rootScope.$new();
      element    = $compile('<input full-name ng-model="name">')(scope);
      controller = element.controller('ngModel');
    }));

    it('is valid if there is a space', function () {
      controller.$setViewValue('Ben Drucker');
      scope.$digest();
      expect(controller.$error.fullName).to.be.false;
    });

    it('is invalid if there is no space', function () {
      controller.$setViewValue('Ben');
      scope.$digest();
      expect(controller.$error.fullName).to.be.true;
    });

  });

});
