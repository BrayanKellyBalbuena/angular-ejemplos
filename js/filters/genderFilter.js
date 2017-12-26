'use strict'
///reference path="bower_components/angular/angular.min.js"/>
///reference path="script.js"/>

app.filter('gender',function(){
    return function(gender){
        switch (gender) {
            case 1: 
                return 'male';
            case 2:
                return 'female';
            case 3:
                return 'Not disclosed';
        }
    }
})
