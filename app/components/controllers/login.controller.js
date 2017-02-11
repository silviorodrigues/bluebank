'use strict'

angular.module('bluebank').controller('loginController', function($scope, $location, $timeout) {

	var vm = this;
	vm.fakeLogin = fakeLogin;

	function fakeLogin() {
		vm.loading = true;
		$timeout(function(){ 
			$location.path('/dashboard');
			vm.loading = false;
		}, 2000);
	}
});