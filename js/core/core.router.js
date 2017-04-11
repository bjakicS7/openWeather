(function(){
    "use strict";

    angular
        .module("myApp.core")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"]
    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("main", {
                //abstract: true,
                views: {
                    "headers": {
                        templateUrl: "js/core/header.html"
                    }
                }
            });
    }
})();