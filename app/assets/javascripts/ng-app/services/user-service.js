angular.module('myApp')
.factory('userService', ['$http', function($http) {
	var users = {};

	users.getUsers = function() {
		return $http.get('/users');
	}

	return users;
}])