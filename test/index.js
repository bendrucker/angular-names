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
      scope.name = 'Ben Drucker';
      scope.$digest();
      expect(controller.$error.fullName).to.not.be.ok;
    });

    it('is invalid if there is no space', function () {
      scope.name = 'Ben';
      scope.$digest();
      expect(controller.$error.fullName).to.be.true;
    });

    it('is invalid if empty', function () {
      scope.$digest();
      expect(controller.$error.fullName).to.be.true;
    });

  });

});
