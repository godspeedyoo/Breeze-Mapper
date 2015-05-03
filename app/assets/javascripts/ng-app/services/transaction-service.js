'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(type) {
		return $http.get('/transactions' + '?type=' + type);
	}

	return transactions;
}]);