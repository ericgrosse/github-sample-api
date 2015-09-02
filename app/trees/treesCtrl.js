(function() {
	'use strict';

	angular.module('myApp').controller('treesCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/repos/";

		$scope.owner = $stateParams.owner;
		$scope.repo = $stateParams.repo;
		$scope.sha = $stateParams.sha;

		$scope.getTrees = function() {
			
			$http.get(baseUrl + $scope.owner + "/" + $scope.repo + "/git/trees/" + $scope.sha)
			.then(
				function(response) {
					console.log(response);					
					var data = response.data;

					$scope.tree = data.tree;
				},
				function(error) {
					console.log(error);
				}
			);

		};

		$scope.getTrees();

	});

})();