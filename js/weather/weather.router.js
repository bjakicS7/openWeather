(function(){
    "use strict";

    angular
        .module("myApp.weather")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("main", {
                url: "/home",
                views: {
                    "content@": {
                        templateUrl: "js/weather/weather.html",
                        controller: "weatherController",
                        controllerAs: "wc"
                    }
                }
            });
            /*.state("main.town", {
                url: "/search/:city",
                views: {
                    "content@": {
                        templateUrl: "js/weather/city.html",
                        controller: "cityController",
                        controllerAs: "cc",
                        resolve: {
                            city: getCity
                        }
                    }
                }
            });*/

        function getCity(WeatherService, $stateParams){
            return WeatherService.getTownInfo($stateParams.city);
        }
    }
})();