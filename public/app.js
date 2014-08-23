(function () {

  'use strict';

  var rootModule = angular.module('Relicuos', [
    'Relicuos.Controllers',
    'Relicuos.Directives',
    'ui.router'
  ]);

  rootModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {

      url: '/',
      templateUrl: 'tpl/home.tpl.html',
      controller: 'home'

    });

  }]);

  rootModule.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

    }
    ]
  );

}());
