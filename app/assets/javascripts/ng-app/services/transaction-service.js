'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(options) {
		var userOption = 'user_id=' + options['userId'] + '&';
		var earningOption = 'earning=' + options['earning'] + '&';
		var chargeOption = 'charge=' + options['charge'] + '&';
		return $http.get('/transactions' + '?' + 
											userOption +
											earningOption +
											chargeOption);
	}

	return transactions;
}]);