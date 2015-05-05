'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(options) {
		return $http.get('/transactions' + 
											'?user_id=' + options['user_id'] +
											'?type=' + options['type']);
	}
	

	return transactions;
}]);