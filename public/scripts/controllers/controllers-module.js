/**
 * Created by Ronnie on 2014-05-22.
 */

angular.module('Relicuos.Controllers', []);

angular.module('Relicuos.Controllers').controller('home', ['$scope','$state','$http', function($scope, $state, $http){

  'use strict';

  $scope.event = {};

  $scope.onClick = function(){

    var newEvent = {
      category: "baseball",
      date: new Date('June 23, 2014'),
      home: "Chicago Cubs",
      betsOnHome: 3,
      away: "New York Yankees",
      betsOnAway: 2,
      oddsHome: 2,
      oddsAway: 1.5
    };

//    $http.post("/createSingleEvent", newEvent).success(function(){
//      console.log("got to here");
//    }).error(function(){
//      console.log("error");
//    });

    $http.get("/getSingleEvent/baseball").success(function(data){
      console.dir(data);
    }).error(function(){
      console.log("error");
    });
  };

  $http.get("/getSingleEvent/baseball").success(function(data){
    console.dir(data);
    $scope.event = data;
  }).error(function(){
    console.log("error");
  });


}]);