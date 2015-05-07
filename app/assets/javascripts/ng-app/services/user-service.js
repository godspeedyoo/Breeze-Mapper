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

	// PROS: 
		// 1) The client only loads data from the server once, and never needs to create
		// 		another http request to the server! 
		// 2) I can also handle and interpret the data from dataService within userService in any way 
		// 		I want. For example, I can calculate averages, means, mode, and other statistics that
		// 		would be inferred from my source data without adding complexity to the server side.


	// CONS: 
		// 1) It seems like there is more programming overhead in writing
		// 		code to package my data from the rails controller as well as extracting the bits I need
		// 		from these services.


	var serviceObj = {};
	serviceObj.users = [];
	var users;
	var trans;

	$rootScope.$on('dataUpdated', function() {
		users = dataService.data;

		// iterate through each user to store name and id
		for (var userId in users) {
			trans = users[userId].transactions;
			serviceObj.users.push({id: userId, name: users[userId].name});

			// iterate through each user's transactions to store transaction statistics
			var total_earnings, total_charges;

			for (var t in trans) {
				if (trans[t].transaction_type === 'earning') {
					total_earnings = trans[t].amount;
					// total up amounts based on transaction type and store in object
					serviceObj.users[serviceObj.users.length - 1]['total_earnings'] 
						= parseFloat(total_earnings).toFixed(2);
				} else if (trans[t].transaction_type === 'charge') {
					total_charges = trans[t].amount;
					serviceObj.users[serviceObj.users.length - 1]['total_charges'] 
						= parseFloat(total_charges).toFixed(2);
				}
			}			
		}
		$rootScope.$broadcast('usersUpdated');
	})





	return serviceObj;
}]);