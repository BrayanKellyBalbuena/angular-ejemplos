
    'user strict';

    ///reference path="bower_components/angular/angular.js"/>

    var app = angular.module('myModule', []);

    app.directive('myDirective', function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: '../directives/myDirective.html',
            scope: {
               autorNombre: '@',
               autorLibro: '&',
               autorObjecto: '=',
               enMayusculas: '&',
            },
        };
    });


    app.controller('MyController', function($scope) {
          $scope.autor = {nombre: 'Juan', apellido: 'Perez', libro: 'Ejemplo libro'};

          $scope.enMayusculas = function(autor) {
             return autor.nombre.toUpperCase();
          };
          a.name.toLocallUppercase();
    });

    app.controller('filterController', function($scope){
        $scope.personas = [
                             {nombre: 'Juan', apellido: 'Perez', 'cuidad': 'Santo Domigo' },
                             {nombre: 'Jose', apellido: 'Santana', 'cuidad': 'Santiago' },
                             {nombre: 'Pepe', apellido: 'Pito', 'cuidad': 'Samana' },
                             {nombre: 'Marcos', apellido: 'Riza', 'cuidad': 'Higuey' }
                          ];
    });

