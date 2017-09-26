var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as bc'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as rc'
    }).otherwise({ redirectTo: '/'});
  });