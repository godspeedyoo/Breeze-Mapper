'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(options) {
		var userOption = 'user_id=' + options['userId'];
		return $http.get('/transactions' + '?' + userOption)
	}

	return transactions;
}]);