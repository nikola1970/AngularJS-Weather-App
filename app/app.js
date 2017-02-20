(function(){

	var weatherApp = angular.module("weatherApp", ["ngRoute", "ngAnimate"]);

	weatherApp.config(["$routeProvider", function($routeProvider){

		$routeProvider
			.when("/", {
				templateUrl: "views/home.html",
				controller: "mainController"
			})
			.when("/list", {
				templateUrl: "views/list.html",
				controller: "listController"
			})
			.otherwise({
				redirectTo: "/"
			});

	}]);

}());