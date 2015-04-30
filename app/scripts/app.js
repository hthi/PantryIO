'use strict';

/**
 * @ngdoc overview
 * @name pantryApp
 * @description
 * # pantryApp
 *
 * Main module of the application.
 */
angular
  .module('pantryApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
