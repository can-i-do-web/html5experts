'use strict';

angular
  .module('anguarJsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .constant({
    ROUTES:{
      main: {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      },
      num1: {
        url: '/number1',
        templateUrl: 'views/number1/index.html',
        controller: 'Num1Ctrl'
      },
      num2: {
        url: '/number2',
        templateUrl: 'views/number2/index.html',
        controller: 'Num2Ctrl'
      },
      num3: {
        url: '/number3',
        templateUrl: 'views/number3/index.html',
        controller: 'Num3Ctrl'
      }
    }
  })
  .config(function ($routeProvider, ROUTES) {

    angular.forEach(ROUTES, function(route){
       $routeProvider.when(route.url, {
        templateUrl: route.templateUrl,
        controller: route.controller
      });
    });

    $routeProvider.otherwise({ redirectTo: ROUTES.main });

  });
