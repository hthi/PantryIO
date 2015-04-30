'use strict';
angular.module('PantryIO').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfilesController',
      controllerAs: 'profilesController'
    })
    .when('/recipes', {
      templateUrl: 'views/recipes.html',
      controller: 'RecipesController',
      controllerAs: 'recipesController'
    })
    .when('/recipe-details', {
      templateUrl: 'views/recipe-details.html',
      controller: 'RecipesController',
      controllerAs: 'recipesController'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
