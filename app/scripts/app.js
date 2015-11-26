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
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
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
