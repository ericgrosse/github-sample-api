(function() {
	'use strict';

	angular.module('myApp').controller('userCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/users/";

		$scope.userId = $stateParams.userId;

		$scope.getUser = function() {
			
			$http.get(baseUrl + $scope.userId)
			.then(
				function(response) {
					console.log(response);					
					$scope.data = response.data;
				},
				function(error) {
					console.log(error);
				}
			);

		};

		$scope.getUser();

	});

})();