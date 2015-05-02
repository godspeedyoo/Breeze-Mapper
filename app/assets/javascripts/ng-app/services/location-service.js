'use strict';

angular.module('myApp')
.factory('locationService', ['$http', function($http) {
	var locations = {};
	var url = '/locations'

	locations.getLocations = function() {
		return $http.get('/locations')
	}


	return locations
}]);