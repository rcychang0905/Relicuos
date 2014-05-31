/**
 * Created by Ronnie on 2014-05-22.
 */

angular.module('Relicuos.Controllers', []);

angular.module('Relicuos.Controllers').controller('home', ['$scope', '$state', '$http', function ($scope, $state, $http) {

  'use strict';

  var newEvent = [
    {
      category: "baseball",
      date: new Date('June 23, 2014'),
      home: "Chicago Cubs",
      betsOnHome: 3,
      away: "St Louis Cardinals",
      betsOnAway: 2,
      oddsHome: 4,
      oddsAway: 2
    },
    {
      category: "baseball",
      date: new Date('June 23, 2014'),
      home: "Toronto Blue Jays",
      betsOnHome: 6,
      away: "Seattle Mariners",
      betsOnAway: 6,
      oddsHome: 1,
      oddsAway: 1
    },
    {
      category: "baseball",
      date: new Date('June 23, 2014'),
      home: "San Francisco Giants",
      betsOnHome: 2,
      away: "Los Angeles Angels",
      betsOnAway: 4,
      oddsHome: 2,
      oddsAway: 4
    }
  ];

  $scope.addEvent = function () {

    $http.post("/createSingleEvent", newEvent).success(function (data) {
      console.dir(data);
    }).error(function () {
      console.log("error");
    });

  };

  $scope.getEvent = function () {

    $http.get("/getSingleEvent/baseball").success(function (data) {
      console.dir(data);
    }).error(function () {
      console.log("error");
    });

  };

  $http.get("/getSingleEvent/baseball").success(function(data){
    $scope.events = data;
    console.dir($scope.events);
  }).error(function(){
    console.log("error");
  });

}]);