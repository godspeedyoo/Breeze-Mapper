angular.module('myApp')
.controller('HomeCtrl', ['locationService', '$scope', 
	function (locationService, $scope) {

    locationService.getLocations().success(function(response) {
    	$scope.locations = response;
    })
}]);