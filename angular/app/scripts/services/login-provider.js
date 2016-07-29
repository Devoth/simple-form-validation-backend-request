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

    var getResponse = function (credentials) {
      var deferred = $q.defer();

      $http({
        method: 'POST',
        url: '//api.test/auth',
        data: credentials
      })
      .success(function (data) {
        deferred.resolve(data);
      })
      .error(function (reason) {
        deferred.reject(reason);
      });

      return deferred.promise;
    };

    // Public API here
    return {
      getResponse: getResponse
    };
  }]);
