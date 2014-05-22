/**
 * Created by raulvieira on 2014-04-08.
 */

(function () {

	'use strict';

	var rootModule = angular.module('Relicuos', ['ui.router']);

	rootModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {

			url: '/',

			templateUrl: 'tpl/home.tpl.html'

		});

	}]);

	rootModule.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

		}
		]
	);

}());
