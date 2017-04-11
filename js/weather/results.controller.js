/**
 * Created by Developer-b06 on 4/11/2017.
 */
(function(){
    "use strict";

    angular
        .module("myApp.weather")
        .controller("resultsController", resultsController);

    resultsController.$inject=["WeatherService", "getCity"];
    function resultsController(WeatherService, getCity){
        var rc = this;  //controllerAS
        console.log(getCity.data);
        rc.cityData = getCity.data;

        var map = new google.maps.Map(document.getElementById('googleMap'), {
            center: {lat: rc.cityData.coord.lat, lng: rc.cityData.coord.lon},
            zoom: 10
        });
        var marker = new google.maps.Marker({
            position: {lat: rc.cityData.coord.lat, lng: rc.cityData.coord.lon},
            map: map
        });
    }
})();
