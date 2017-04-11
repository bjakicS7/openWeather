(function(){
    "use strict";

    angular
        .module("myApp.weather")
        .factory("WeatherService", WeatherService);

    WeatherService.$inject= ["$http"];
    function WeatherService($http){
// maps id = AIzaSyA_7TWWy6XrnZ54AADcS512AzwQLtysWhw
//weather id = appid=d0cd0eee13fd081f87b676556643f8ef

        var restUrl= "http://api.openweathermap.org/data/2.5/weather?appid=d0cd0eee13fd081f87b676556643f8ef&units=imperial&q=";

        return {
            getApi: getApi,
            getTownInfo: getTownInfo
        };

        function getApi(params){
            return $http.get(restUrl + params);
        }

        function getTownInfo(town){
            return $http.get(restUrl + town).then(function(response){
                return resposne;
            })
        }
    }
})();