'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('user credentials object should be defined', function() {
    expect(scope.user).toBeDefined();
  });

  it('should attach user credentials to the scope', function () {
    expect(Object.keys(scope.user).length).toBe(2);
  });
});
