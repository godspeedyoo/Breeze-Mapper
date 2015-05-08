'use strict';

angular.module('myApp')
.factory('dataService', ['$http', '$rootScope', function($http, $rootScope) {

	var data = {};

	data.getData = function() {
		$http.get('/data').success(function(response) {
			data.data = response;
			$rootScope.$broadcast('dataUpdated');
		})
	};

	return data;
}]);