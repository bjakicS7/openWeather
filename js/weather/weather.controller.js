(function(){
    "use strict";

    angular
        .module("myApp.weather")
        .controller("weatherController", weatherController);

    weatherController.$inject=["WeatherService"];
    function weatherController(WeatherService){
        var wc = this;  //controllerAS

        wc.ibCity = 'beograd';
        //wc.cityData = {};
        //wc.show = false;

      /*  wc.searchCity = function(param){
            return WeatherService.getApi(param)
                .success(function(data){
                console.log(data);
                wc.cityData = data;
                wc.show = data.cod === 200 ? true : false;

               var map = new google.maps.Map(document.getElementById('googleMap'), {
                    center: {lat: data.coord.lat, lng: data.coord.lon},
                    zoom: 10
                });
               var marker = new google.maps.Marker({
                    position: {lat: data.coord.lat, lng: data.coord.lon},
                    map: map
                });
            })
                .error(function(data, status){
                    console.log(status);
                });
        }  */
    }
})();

