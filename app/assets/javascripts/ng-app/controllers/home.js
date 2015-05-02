angular.module('myApp')
.controller('HomeCtrl', ['locationService', '$scope', 
	function (locationService, $scope) {
    var locationToggle = false

    locationService.getLocations().success(function(response) {
    	$scope.locations = response;
    })

}]);