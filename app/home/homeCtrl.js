(function() {
	'use strict';

	angular.module('myApp').controller('homeCtrl', function($scope, $http) {

		var baseUrl = "https://api.github.com/search/repositories?";
		var accessToken = "14ba9dc08c52be2e427027346d06dcf70f3d37a8";

		$scope.query = "";
		$scope.sortOptions = "";
		$scope.sortOrder = "descending";
		$scope.page = 1;
		$scope.resultsPerPage = 20;
		$scope.filterResults = "";
		$scope.limitResults = "";
		$scope.sortResults = "";
		$scope.totalResults = 0;
		$scope.pageOffset = 0; // used for updating pagination values (ex/ pagination shows 2 3 4 5 6 instead of 1 2 3 4 5)
		$scope.showSearchResults = false;

		// Displaying results x to y (ex: 1 to 20)
		$scope.lowerLimit = ($scope.page-1)*$scope.resultsPerPage + 1;
		$scope.upperLimit = $scope.page*$scope.resultsPerPage;

		// Call to github's search API
		$scope.githubSearch = function(query, sortOptions, sortOrder, page, resultsPerPage) {
			
			$scope.loading = true;

			$http.get(baseUrl + "access_token=" + accessToken + "&q=" + query + "&sort=" + sortOptions 
				+ "&order=" + sortOrder + "&page=" + page 
				+ "&per_page=" + resultsPerPage)
			.then(
				function(response) {
					console.log(response);
					var data = response.data.items;
					console.log(data);

					$scope.totalResults = response.data.total_count + " Results";
					$scope.data = data;

					// Math.min used since the API limits the results to the first 1000 entries
					$scope.totalPages = Math.min( Math.ceil( parseInt($scope.totalResults) / parseInt($scope.resultsPerPage) ) , Math.ceil( 1000 / parseInt($scope.resultsPerPage) ) );
					
					// Update lower and upper limit
					$scope.lowerLimit = (page-1)*resultsPerPage + 1;
					$scope.upperLimit = page*resultsPerPage;
					$scope.page = page;

					if($scope.page > 6) {
						$scope.pageOffset = $scope.page - 6;
					}
					else {
						$scope.pageOffset = 0;
					}

					// Reset filter parameters
					$scope.filterResults = "";
					$scope.limitResults = "";
					$scope.sortResults = "";

					$scope.showSearchResults = true;

				}, 
				function(error) {
					console.log(error);
				}
			)
			.finally(function() {
				$scope.loading = false;
			});

		};

		$scope.goToPage = function(page) {
			
			// Increment page count and update lowerLimit and upperLimit
			$scope.page = page;
			$scope.lowerLimit = (page-1)*$scope.resultsPerPage + 1;
			$scope.upperLimit = page*$scope.resultsPerPage;

			// Re-run the search
			$scope.githubSearch($scope.query, $scope.sortOptions, $scope.sortOrder, $scope.page, $scope.resultsPerPage);

		};

		// Simple hack to make ng-repeat work like a for loop to a specific endpoint
		$scope.getNumber = function(num) {
			return new Array(num);
		}

		// JQuery to deal with the appearance of regular buttons mimicking radio buttons
		$(".home-radio-button-sort").click(function() {
			$(".home-radio-button-sort").removeClass("active");
			$(this).addClass("active");
		});
		$(".home-radio-button-order").click(function() {
			$(".home-radio-button-order").removeClass("active");
			$(this).addClass("active");
		});
		$(".home-radio-button-live").click(function() {
			$(".home-radio-button-live").removeClass("active");
			$(this).addClass("active");
		});

	});

})();