angular.module('myApp')
.controller('HomeCtrl', ['locationService', 'userService', '$scope', 
	function (locationService, userService, $scope) {
    var locationToggle = false

    locationService.getLocations().success(function(response) {
    	$scope.locations = response;
    })

    userService.getUsers().success(function(response) {
    	$scope.users = response;
    })

}]);