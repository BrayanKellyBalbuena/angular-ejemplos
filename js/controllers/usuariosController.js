usuarios.controller('UsuariosController',function($scope, $http){

    $scope.completado = false;
    

    $http.get('https://jsonplaceholder.typicode.com/users').
    then(function(response){
        $scope.usuarios = response.data;
        cambioCompletado();
    }, function(response){
        $scope.message = respuesta.data;
        cambioCompletado();
    });
     
    function cambioCompletado(){
        $scope.completado = true;
    }
})