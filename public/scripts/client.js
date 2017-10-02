var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/goku', {
        templateUrl: 'views/goku.html',
        controller: 'GokuController as gc'
    }).when('/ranger', {
        templateUrl: 'views/ranger.html',
        controller: 'RangerController as rc'
    }).when('/chapulin', {
        templateUrl: 'views/chapulin.html',
        controller: 'ChapulinController as cc'
    }).otherwise({ redirectTo: '/' });
});

