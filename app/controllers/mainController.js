(function () {

	var mainController = function ($scope, cityFactory) {


		$scope.cityInfo = [];


		$scope.init = function () {

			$scope.choosenCity = cityFactory.getChoosenCity();
			$scope.listVisible = $scope.choosenCity ? true : false;
			$scope.formVisible = !$scope.listVisible;
			if ($scope.choosenCity) {
				cityFactory.getCity($scope.choosenCity).then(function (response) {
					$scope.cityInfo = response;
				});
			}
		};

		$scope.init();


		$scope.addCity = function () {
			cityFactory.setChoosenCity($scope.desiredCity);
			$scope.desiredCity = "";
			$scope.init();
		}

	}

	mainController.$inject = ["$scope", "cityFactory"];

	angular.module("weatherApp").controller("mainController", mainController);

}());