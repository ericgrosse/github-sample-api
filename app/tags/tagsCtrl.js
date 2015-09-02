(function() {
	'use strict';

	angular.module('myApp').controller('tagsCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/repos/";

		$scope.owner = $stateParams.owner;
		$scope.repo = $stateParams.repo;

		$scope.getTags = function() {
			
			$http.get(baseUrl + $scope.owner + "/" + $scope.repo + "/tags")
			.then(
				function(response) {
					$scope.data = response.data;

					if($scope.data.length == 0) {
						$scope.emptyMessage = "No results";
					}

				},
				function(error) {
					console.log(error);
				}
			);

		};

		$scope.getTags();

	});

})();