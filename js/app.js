// AngularJS alkalmazás és routing definiálása
var app = angular.module('myApp', ['ngRoute']);  // ngRoute hozzáadása az alkalmazáshoz

// Routing beállítása
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './html/home.html'
    })
    .when('/stack', {
      templateUrl: './html/stack.html'
    })
    .when('/contact', {
      templateUrl: './html/contact.html'
    })
    .otherwise({
      redirectTo: '/home'  // Az alapértelmezett útvonal a home
    });
});
