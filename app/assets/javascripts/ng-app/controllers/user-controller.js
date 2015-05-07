angular.module('myApp')
.controller('UserCtrl', ['userService', '$scope', '$rootScope', 'ctrlPanelService',
 function(userService, $scope, $rootScope, ctrlPanelService) {

 	// initialize data
 	$scope.users = userService.users;

	// listeners waiting for control panel changes
  $rootScope.$on('usersUpdated', function() {
    $scope.users = userService.users;
  });

}]);