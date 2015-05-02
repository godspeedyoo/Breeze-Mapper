'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function() {
		return $http.get('/transactions');
	}

	return transactions;
}]);