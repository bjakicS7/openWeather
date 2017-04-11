
/**
 * Created by Developer-b06 on 4/11/2017.
 */
(function() {
    "use strict";
    angular
        .module("myApp.direktiva")
        .directive("result", result);

    function rating() {
        return {
            restrict: "A",
            templateUrl: "js/shared/directive.html",
            scope: {
                rating: "@",
                ratingIconOn: "@",
                ratingIconOff: "@"
            },
            link: function(scope) {
                scope.icons = [false, false, false, false, false];

                for(var i = 0; i < scope.rating; i++) {
                    scope.icons[i] = true;
                }
            }
        };
    }
})();