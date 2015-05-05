angular.module('myApp')
.controller('UserCtrl', ['userService', '$scope', '$rootScope', 'ctrlPanelService',
 function(userService, $scope, $rootScope, ctrlPanelService) {

 	// initialize data
 	$scope.users = ctrlPanelService.users;

	// listeners waiting for control panel changes
  $rootScope.$on('updateUsers', function() {
    $scope.users = ctrlPanelService.users;
  });

}]);