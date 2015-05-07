angular.module('myApp')
.factory('ctrlPanelService', ['$rootScope', 'userService', 'locationService','transactionService',
function($rootScope, $userService, locationService, transactionService) {
	// This service is responsible for storing and broadcasting changes 
	// to any of the control panel's settings. These settings are intended
	// to be available to the entire app to be synced with whatever portion
	// uses them. For example, transactions tab in charts will react to a
	// selected userId via 'updateUserId' event on the $rootScope.
	// This effectively keeps certain parts of the application code DRY. 

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