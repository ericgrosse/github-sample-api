(function() {
	'use strict';

	angular.module('myApp').controller('languagesCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/repos/";

		$scope.owner = $stateParams.owner;
		$scope.repo = $stateParams.repo;

		$scope.getLanguages = function() {
			
			$http.get(baseUrl + $scope.owner + "/" + $scope.repo + "/languages")
			.then(
				function(response) {
					console.log(response);					
					$scope.data = response.data;
					console.log($scope.data);
					console.log($scope.data.length);

					if($.isEmptyObject($scope.data)) {
						$scope.emptyMessage = "No results";
					}

				},
				function(error) {
					console.log(error);
				}
			);

		};

		$scope.getLanguages();

	});

})();