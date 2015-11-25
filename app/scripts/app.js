'use strict';

/**
 * @ngdoc overview
 * @name mlgApp
 * @description
 * # mlgApp
 *
 * Main module of the application.
 */
angular
  .module('mlgApp', [
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hljs'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
