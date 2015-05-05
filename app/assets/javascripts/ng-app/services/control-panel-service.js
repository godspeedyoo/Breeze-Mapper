angular.module('myApp')
.factory('ctrlPanelService', ['$rootScope', 'userService', 'locationService','transactionService',
function($rootScope, $userService, locationService, transactionService) {

	var settings = { users: null, userId: null };

	settings.updateUsers = function(users) {
		settings.users = users;
		$rootScope.$broadcast('updateUsers');
	}

	settings.setUserId = function(userId) {
		settings.userId = userId;
		$rootScope.$broadcast('updateUserId');
	}

	// define generic submit event for other controllers to use
	settings.submit = function() { $rootScope.$broadcast('submit') };


	return settings;

}]);