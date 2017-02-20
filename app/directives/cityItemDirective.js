(function () {

	var cityItemDirective = function () {
		return {
			restrict: "AE",
			templateUrl: "../../views/cityItemDirective.html",
			replace: true
		}
	}

	angular.module("weatherApp").directive("cityItemDirective", cityItemDirective);


}());