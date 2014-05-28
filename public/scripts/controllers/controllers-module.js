/**
 * Created by Ronnie on 2014-05-22.
 */

angular.module('Relicuos.Controllers', []);

angular.module('Relicuos.Controllers').controller('home', ['$scope','$state',function($scope, $state){

  'use strict';

  $scope.onClick = function(){
    $state.go('authenticate');
  };

  $scope.event = {
    "home": "Jays",
    "away": "Cubs"
  };

}]);