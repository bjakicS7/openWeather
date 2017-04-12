
/**
 * Created by Developer-b06 on 4/11/2017.
 */
(function() {
    "use strict";
    angular
        .module("myApp.direktiva")
        .directive("myResult", myResult);

    function myResult(){
        return{
            restrict: "E",
            //template: "<div class='row'><div class='col-xs-6 col-md-3'><h2>{{name}}</h2><p>temperatura: {{temp | temperatures}}   ||  {{ temp | temperatures:1}}</p><p>pritisak: {{pressure}} hPa </p><p>valznost vazduha: {{humidity}}% </p> <p>Minimalna {{ min | temperatures}} || {{min | temperatures:1}}</p><p>maximalna dnevna temp: {{ max | temperatures}} || {{max | temperatures:1}}</p><p>vidjivost: {{visibility}} </p><p>Vetar: brzinja {{speed}}m/s  i ugao duvanja: {{deg}} degrees </p></div></div>",
            //template: "<h2>hello world {{temp}}</h2>",
            templateUrl: "js/shared/direktiva.html",
            scope: {
                mydata: '@',
                temp: '@',
                pressure: '@',
                humidity: '@',
                min: '@',
                max: '@',
                visibility: '@',
                speed: '@',
                deg: '@',
                name: '@'
            },
             link: function(scope) {
                 console.log("hello world");
             }
        };
    }
})();