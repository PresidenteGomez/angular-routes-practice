var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/goku', {
        templateUrl: 'views/goku.html',
        controller: 'GokuController as hc'
    }).when('/ranger', {
        templateUrl: 'views/ranger.html',
        controller: 'RangerController as hc'
    }).when('/chapulin', {
        templateUrl: 'views/chapulin.html',
        controller: 'ChapulinController as hc'
    }).otherwise({ redirectTo: '/' });
});

