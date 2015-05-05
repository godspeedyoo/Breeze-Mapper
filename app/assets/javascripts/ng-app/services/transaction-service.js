'use strict';

angular.module('myApp')
.factory('transactionService',['$http', function($http) {
	var transactions = {};

	transactions.getTransactions = function(options) {
		var userOption = options['userId'] ? 'user_id=' + options['userId'] : '';
		return $http.get('/transactions' + '?' + userOption)
	}



	return transactions;
}]);