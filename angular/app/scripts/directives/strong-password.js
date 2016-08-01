'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:strongPassword
 * @description
 * # strongPassword
 */
angular.module('angularApp')
  .directive('strongPassword', function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {

        var hasUppercaseLetters = function(string) {
          return string !== string.toLowerCase();
        };

        var hasLowercaseLetters = function(string) {
          return string !== string.toUpperCase();
        };

        var isStrongPassword = function(pass) {
          return pass.length >= 6 &&
            /\d/.test(pass) &&
            hasUppercaseLetters(pass) &&
            hasLowercaseLetters(pass);
        };

        ngModel.$parsers.unshift(function(value) {
          var valid = isStrongPassword(value);
          ngModel.$setValidity('strongPassword', valid);
          return valid ? value : undefined;
        });

      }
    };
  });
