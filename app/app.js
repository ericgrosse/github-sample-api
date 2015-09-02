'use strict';

angular.module('myApp', ['ui.router', 'ngAnimate'])

.run(function($window, $rootScope) {
	$rootScope.goBack = function() {
		$window.history.back();
	};
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "home/home.html",
		controller: "homeCtrl"
	})
	.state('tags', {
		url: "/repos/:owner/:repo/tags",
		templateUrl: "tags/tags.html",
		controller: "tagsCtrl"
	})
	.state('commits', {
		url: "/repos/:owner/:repo/commits/:sha",
		templateUrl: "commits/commits.html",
		controller: "commitsCtrl"
	})
	.state('trees', {
		url: "/repos/:owner/:repo/git/trees/:sha",
		templateUrl: "trees/trees.html",
		controller: "treesCtrl"
	})
	.state('languages', {
		url: "/repos/:owner/:repo/languages",
		templateUrl: "languages/languages.html",
		controller: "languagesCtrl"
	})
	.state('contributors', {
		url: "/repos/:owner/:repo/contributors",
		templateUrl: "contributors/contributors.html",
		controller: "contributorsCtrl"
	})
	.state('stargazers', {
		url: "/repos/:owner/:repo/stargazers",
		templateUrl: "stargazers/stargazers.html",
		controller: "stargazersCtrl"
	})
	.state('subscribers', {
		url: "/repos/:owner/:repo/subscribers",
		templateUrl: "subscribers/subscribers.html",
		controller: "subscribersCtrl"
	})
	.state('user', {
		url: "/users/:userId",
		templateUrl: "user/user.html",
		controller: "userCtrl"
	});


	$urlRouterProvider.otherwise("/home");
})

.filter('nonEmpty', function() {
	return function(input) {
		return typeof input === "undefined" || input === null || input.length == 0 ? 'Not specified' : input;
	};
});