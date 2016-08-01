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

    $scope.loggedIn = false;
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
        console.log('success', data);
        if (data.status === 201) {
          $scope.loggedIn = true;
        }
        $scope.response = data;
      }, function (err) {
        console.log('error', err);
        $scope.response = err;
      });
    };

  }]);
