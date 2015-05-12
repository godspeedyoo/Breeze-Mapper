'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

  // transaction service obtains data directly from the server, unlike location/user service
  // this is merely to demonstrate my first strategy of obtaining data directly through services
  // rather than relying on the data service (which eager loads all relevant data)
  // Please see user-service.js for a detailed explanation of how I went about 
  // sending data from the back end in two ways.

	transactions.getTransactions = function(options) {
		var userOption = options['userId'] ? 'user_id=' + options['userId'] : '';
		return $http.get('/transactions' + '?' + userOption)
	}

	return transactions;
}]);