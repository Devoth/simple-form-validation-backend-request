'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['$scope', 'loginProvider', function ($scope, loginProvider) {

    $scope.formSubmitted = false;

    $scope.signup = {};

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      $scope.response = '';

      loginProvider.getResponse( $scope.user )
      .then( function(data) {
        $scope.response = data;
      }, function (err) {
        console.log(err);
      });
    };

  }]);
