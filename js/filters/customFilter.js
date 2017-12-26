 // /reference path="bower_components/angular/angular.js"/>

app.filter('customFilter', function(){
    return function(texto){
        return texto.toUpperCase();
    }
})