(function(){

	var cityFactory = function($http) {

		var API_URL = "https://api.openweathermap.org/data/2.5/weather?appid=397843cb2d3cbe8f748d85fd572da092&units=metric&q=";

		

		return {
			getCity: function(city){
				return $http.get(API_URL + city).then(function(data){
					return data;
				});
			},
			getLocalList: function(){
				return JSON.parse(localStorage.getItem("localCitiesList"));
			},
			getChoosenCity: function(){
				return localStorage.getItem("choosenCity");
			},
			setLocalList: function(list){
				localStorage.setItem("localCitiesList", JSON.stringify(list));
			},
			setChoosenCity: function(city){
				localStorage.setItem("choosenCity", city.toString());
			}
		}


	}

	cityFactory.$inject = ["$http"];

	angular.module("weatherApp").factory("cityFactory", cityFactory);


}());