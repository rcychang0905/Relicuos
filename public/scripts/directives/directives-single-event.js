/**
 * Created by Ronnie on 2014-05-26.
 */

angular.module('Relicuos.Directives').directive('singleEvent',[function(){

  'use strict';

  return {

    restrict: 'EA',

    replace: 'true',

    templateUrl: 'scripts/directives/directives-single-event-tpl.html',

    scope: {
      home: '@',
      away: '@'
    },

    link: function(scope){

    }
  };


}]);