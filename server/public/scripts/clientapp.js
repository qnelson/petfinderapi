var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: "HomeController"
        })
        .when('/dog', {
            templateUrl: '/views/dog.html',
            controller: "DogController"
        })
        .when('/cat', {
            templateUrl: '/views/cat.html',
            controller: "CatController"
        })
        .when('/bird', {
            templateUrl: '/views/bird.html',
            controller: "BirdController"
        })
        .otherwise({
            redirectTo: 'home'
        })
}]);
