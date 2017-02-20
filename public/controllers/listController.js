(function () {

    var listController = function ($scope, cityFactory) {

        $scope.localListCityInfo = [];
        $scope.cityInfos = [];
        $scope.localList = undefined;

        $scope.init = function () {
            $scope.localList = cityFactory.getLocalList() || [];
            $scope.cityInfos = [];
            $scope.localList.forEach(function (city) {
                cityFactory.getCity(city).then(function (response) {
                    if (city.toLowerCase() === response.data.name.toLowerCase()) {
                        $scope.cityInfos.push(response);
                    }
                });
            });

        }

        $scope.init();

        $scope.removeCity = function (remove) {
            localStorage.removeItem("choosenCity");
             $scope.init();
        };

        $scope.addCityToList = function () {
            $scope.localList.push($scope.anotherCity);
            cityFactory.setLocalList($scope.localList);
            $scope.anotherCity = "";
            $scope.init();
        }

    }

    listController.$inject = ["$scope", "cityFactory"];

    angular.module("weatherApp").controller("listController", listController);


}());