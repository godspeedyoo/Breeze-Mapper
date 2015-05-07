'use strict';

angular.module('myApp')
.factory('userService', ['dataService', '$rootScope', function(dataService, $rootScope) {
	// User service was originally intended to make $http requests to the server to get
	// specific user data. Since the change of the back end data to neatly package all
	// relevant data to one JSON object for eager loading, user service now simply extracts
	// and stores user data using the dataService as its source. Though this might create more
	// dependencies on the structure of dataService's JSON object via individual services,
	// I think it helps to have smaller services responsible for handling their own individual
	// pieces of data in their own way. 

	// If it is deemed likely that the structure of the data might change from the server
	// side, it would be better to create more endpoints serving smaller pieces of data
	// in the rails controllers, pairing these services to grab them individually.

	// I might be completely wrong here, but packaging all the data into one JSON object from 
	// the server seemed like a fun thing to try - regardless of the outcome, I will be able
	// to see the ramifications of how I structure my backend/front end by experimenting in
	// this manner. 

	// CONS: Right now, it seems like there is more programming overhead in writing
	// code to package my data from the rails controller as well as extracting the bits I need
	// from these services.

	// PROS: The client only loads data from the server once, and never needs to create
	// another http request to the server!

	var serviceObj = {};
	serviceObj.users = [];
	var users;

	$rootScope.$on('dataUpdated', function() {
		users = dataService.data;

		for (var userId in users) {
			serviceObj.users.push({id: userId, name: users[userId].name});
		}

		$rootScope.$broadcast('usersUpdated');
	})

	return serviceObj;
}]);