'use strict';

/**
 * @ngdoc function
 * @name mlgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mlgApp
 */
angular.module('mlgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
