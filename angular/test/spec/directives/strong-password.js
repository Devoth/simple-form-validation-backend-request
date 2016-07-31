'use strict';

describe('Directive: strongPassword', function () {

  // load the directive's module
  beforeEach(module('angularApp'));

  var $scope,
    form;

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope.$new();

    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.password" name="password" strong-password />' +
      '</form>'
      );
    $scope.model = { password: null };
    $compile(element)($scope);
    form = $scope.form;
  }));

  it('should fail with less than 6 characters', function() {
    form.password.$setViewValue('xxxY2');
    $scope.$digest();
    expect( $scope.model.password ).toEqual('xxxY2');
    expect( form.password.$valid ).toBe(false);
  });

  it('should fail when not containing a digit', function() {
    form.password.$setViewValue('XXXxxx');
    $scope.$digest();
    expect( $scope.model.password ).toEqual('XXXxxx');
    expect( form.password.$valid ).toBe(false);
  });

  it('should fail when not containing an uppercase letter', function() {
    form.password.$setViewValue('xxxxx6');
    $scope.$digest();
    expect( $scope.model.password ).toEqual('xxxxx6');
    expect( form.password.$valid ).toBe(false);
  });

  it('should fail when not containing a lowercase letter', function() {
    form.password.$setViewValue('XXXXX6');
    $scope.$digest();
    expect( $scope.model.password ).toBeUndefined('XXXXX6');
    expect( form.password.$valid ).toBe(false);
  });

  it('should pass when containing a lowercase & uppercase letter, digit and >= 6 chars', function() {
    form.password.$setViewValue('xX$$$6');
    $scope.$digest();
    expect( $scope.model.password ).toEqual('xX$$$6');
    expect( form.password.$valid ).toBe(true);
  });

});
