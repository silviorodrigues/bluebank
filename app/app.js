'use strict';

angular.module('bluebank', ['ngRoute', 'angular.filter']).config( function( $routeProvider ) {

	$routeProvider
		.when('/login', {
			controller: 'loginController',
			templateUrl: 'components/views/login.html',
			controllerAs: 'vm'
		})
		.when('/dashboard', {
			controller: 'dashboardController',
			templateUrl: 'components/views/dashboard.html',
			controllerAs: 'vm'
		})
		.otherwise({ redirectTo: '/login'});

});
