/**
 * Created by Ronnie on 2014-05-26.
 */

angular.module('Relicuos.Directives').directive('singleEvent', ['$http', function ($http) {

  'use strict';

  return {

    restrict: 'EA',

    replace: 'true',

    templateUrl: 'scripts/directives/directives-single-event-tpl.html',

    scope: {
      home: '@',
      away: '@',
      betsOnHome: '@',
      betsOnAway: '@',
      eventId: '@'
    },

    link: function (scope) {

      scope.clickHome = function () {

        var updateParams = [{ id: scope.eventId }, { betsOnHome: 1 }];

        $http.post("/updateSingleEventBetsCount", updateParams).success(function (data) {
          console.dir(data);
        }).error(function () {
          console.log("error");
        });
      };

      scope.clickAway = function () {

        var updateParams = [{ id: scope.eventId }, { betsOnAway: 1 }];

        $http.post("/updateSingleEventBetsCount", updateParams).success(function (data) {
          console.dir(data);
        }).error(function () {
          console.log("error");
        });
      };
    }
  };


}]);