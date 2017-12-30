/// <reference path="../services/contactosServices.js"/>

'use strict';

app.controller('ContactosCtrl', function( $scope, ContactosServices){
    $scope.contactos = ContactosServices.getContactos();


    $scope.save = function(){
        ContactosServices.save($scope.newContacto);
        $scope.newContacto = {};
    }


     $scope.delete = function(id){
         ContactosServices.delete(id);
     }

     $scope.update = function(id){
         $scope.newContacto = angular.copy(ContactosServices.getContacto(id));
     }
})