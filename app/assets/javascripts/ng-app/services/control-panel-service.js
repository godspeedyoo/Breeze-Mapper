'use strict';

angular.module('myApp')
.factory('ctrlPanelService', ['$rootScope', 'userService','transactionService',
function($rootScope, $userService, transactionService) {

	// This service is responsible for storing and broadcasting changes 
	// to any of the control panel's settings. These settings are intended
	// to be available to the entire app to be synced with whatever portion
	// uses them. For example, charts will listen to the 'updateUserId' event 
	// on the $rootScope and render a chart of that user's data.
	// This effectively keeps certain parts of the application code DRY. 


	// settings can be extended to be responsible for all kinds of controls
	// such as filters, ranges, options to be used throughout the app.
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
	settings.submit = function() { $rootScope.$broadcast('submit', settings.userId) };


	return settings;

}]);