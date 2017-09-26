var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as bc'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as rc'
    }).otherwise('/');
    
    // this is only for removing #!
    $locationProvider.html5Mode(true);
  });