'use strict';

angular.module('myApp')
.factory('locationService', ['dataService', '$rootScope', function(dataService, $rootScope) {
	var locations = {} ;

	$rootScope.$on('dataUpdated', function () {
		
	})

	return locations
}]);