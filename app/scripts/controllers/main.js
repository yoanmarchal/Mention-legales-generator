'use strict';

/**
 * @ngdoc function
 * @name mlgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mlgApp
 */
angular.module('mlgApp')
  .controller('MainCtrl', function ($scope) {

    $scope.client = [];
    $scope.entreprise = [];
    $scope.hebergeur = [];

    $scope.entreprise.name = 'Yoan Marchal';
    $scope.entreprise.url = 'http://yoanmarchal.com/';
    $scope.entreprise.serp = 'Création, refonte de site web en limousin';


    $scope.hebergeur.url = 'http://www.planethoster.net';
    $scope.hebergeur.adresse = 'Planethoster, 4416 Louis B Mayer Laval, Quebec, H7P 0G1 Canada';


  });
