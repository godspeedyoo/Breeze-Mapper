'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(options) {
		var userOption = options['user_id'] ? '?user_id=' + options['user_id'] : "";
		var typeOption = options['type'] ? '?type=' + options['type'] : "";
		return $http.get('/transactions' + userOption + typeOption);
	}

	return transactions;
}]);