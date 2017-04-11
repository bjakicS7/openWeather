/**
 * Created by Developer-b06 on 4/11/2017.
 */
(function(){
    "use strict";

    angular
        .module("myApp")
        .filter("temperatures", function(){
        return function(input, celsius){

            var symbol = celsius === undefined ? '°F' : '°C'
             var fahr = input.toFixed(1);
            var cels = (input - 32) * 5 / 9;
            cels= cels.toFixed(1);

            if(celsius === undefined)
                return fahr + symbol;
            else
                return cels + symbol;


        }
    });
})();
