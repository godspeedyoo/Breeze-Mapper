angular.module('myApp')
.controller('CtrlPanelCtrl', ['$scope', 
															'$rootScope', 
															'userService',
															'locationService',
															'transactionService',
															'ctrlPanelService',
function ($scope, 
				 $rootScope, 
				 userService, 
				 locationService, 
				 transactionService,
				 ctrlPanelService) {
	// Call user service to obtain user data, store it in ctrlpanel service and let it broadcast
  userService.getUsers().success(function(response) {
    ctrlPanelService.updateUsers(response);
  })
  
  // listen for the updated users broadcast and store data in controller scope
  // this pattern is used throughout the app to decouple controllers from being
  // dependent on each other's data and allows the control-panel-service to be a handler between them.
  $rootScope.$on('updateUsers', function() { 
  	$scope.users = ctrlPanelService.users;
  });

  $rootScope.$on('updateUserId', function() {
  	$scope.userId = ctrlPanelService.userId;
  });

  $scope.$watch('userId', function() {
  	ctrlPanelService.setUserId($scope.userId);
  })

  // submit button is using service in order to decouple the generic 'submit' action
  // as it will also rely on broadcast events
  $scope.submit = function() { ctrlPanelService.submit() }

}]);