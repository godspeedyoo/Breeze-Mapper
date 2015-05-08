angular.module('myApp')
.controller('UserTabCtrl', ['userService', '$scope', '$rootScope', 'ctrlPanelService',
 function(userService, $scope, $rootScope, ctrlPanelService) {

 	// initialize data
 	$scope.users = userService.users;

	// listeners waiting for control panel changes
  $rootScope.$on('usersUpdated', function() {
    $scope.users = userService.users;



  });


	$scope.filterString = "-id";

  $scope.setFilter = function(newFilter) {
    if ($scope.filterString === undefined) { 
      $scope.filterString = newFilter;
      return;
    }

    if ($scope.filterString.indexOf(newFilter) != -1) {
      if ($scope.filterString.indexOf('-') != -1) {
        $scope.filterString = '+' + newFilter;
      } else {
        $scope.filterString = '-' + newFilter;
      }
    } else {
      $scope.filterString = '+' + newFilter;
    }
  }


}]);