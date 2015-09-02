(function() {
	'use strict';

	angular.module('myApp').controller('contributorsCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/repos/";

		$scope.owner = $stateParams.owner;
		$scope.repo = $stateParams.repo;

		$scope.getContributors = function() {
			
			$http.get(baseUrl + $scope.owner + "/" + $scope.repo + "/contributors")
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

		$scope.getContributors();

	});

})();