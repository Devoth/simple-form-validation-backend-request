'use strict';

/**
 * @ngdoc service
 * @name angularApp.loginProvider
 * @description
 * # loginProvider
 * Factory in the angularApp.
 */
angular.module('angularApp')
  .factory('loginProvider', ['$q', '$http', function ($q, $http) {

    var statusMessages = {
      '201': 'logowanie poprawne',
      '400': 'niepoprawne dane',
      '401': 'niepoprawne login lub hasło',
      '500': 'błąd usługi'
    };

    // tries to send credentials
    // returns server response with a custom message if available
    var getResponse = function (credentials) {
      var deferred = $q.defer();

      $http({
        method: 'POST',
        // url: 'http://localhost:3000/auth',
        url: '//api.test/auth',
        data: credentials
      })
      .then(function (data) {
        var returnedData = withMessage(data);
        deferred.resolve(returnedData);
      }, function (reason) {
        var returnedReason = withMessage(reason);
        deferred.reject(returnedReason);
      });

      return deferred.promise;
    };

    var withMessage = function withMessage(data) {
      // check if we have a message for that status
      if ( ! Object.keys(statusMessages).indexOf( data.status ) ) {
        return data;
      }

      // replaces the default statusText with our custom one
      data.statusText = statusMessages[data.status];
      return data;
    };

    // Public API here
    return {
      getResponse: getResponse,
      withMessage: withMessage
    };
  }]);
