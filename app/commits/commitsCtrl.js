(function() {
	'use strict';

	angular.module('myApp').controller('commitsCtrl', function($scope, $http, $stateParams) {

		var baseUrl = "https://api.github.com/repos/";

		$scope.owner = $stateParams.owner;
		$scope.repo = $stateParams.repo;
		$scope.sha = $stateParams.sha;

		$scope.getCommits = function() {
			
			$http.get(baseUrl + $scope.owner + "/" + $scope.repo + "/commits/" + $scope.sha)
			.then(
				function(response) {
					console.log(response);
					
					var data = response.data;
					$scope.author = data.commit.author;
					$scope.committer = data.commit.committer;
					$scope.message = data.commit.message;
					$scope.commentCount = data.commit.comment_count;
					$scope.tree = data.commit.tree;
					$scope.stats = data.stats;
					$scope.parentSHA = data.parents[0].sha;
					$scope.files = data.files;

				},
				function(error) {
					console.log(error);
				}
			);

		};

		$scope.getCommits();

	});

})();