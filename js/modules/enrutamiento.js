var enrutamiento = angular.module('enrutamiento',['ngRoute']);

enrutamiento.config(function($routeProvider,$locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'templates/inicio.html',
            controller: 'InicioController'
        })
        .when('/contactenos', {
            templateUrl: 'templates/contactenos.html',
            controller: 'ContactenosController'
        })
        .when('/nosotros', {
            templateUrl: 'templates/nosotros.html',
            controller: 'NosotrosController'
        })
        .otherwise({
            redirecTo: '/'
        })
        $locationProvider.html5Mode(true);
    });
