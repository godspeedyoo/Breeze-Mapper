angular.module('myApp')
.controller('HomeCtrl', ['locationService', 'userService', 'transactionService','$scope', 
	function (locationService, userService, transactionService, $scope) {

    locationService.getLocations().success(function(response) {
    	$scope.locations = response;
    })

    userService.getUsers().success(function(response) {
    	$scope.users = response;
    })

    transactionService.getTransactions().success(function(response) {
    	$scope.transactions = response;
    })


    // chart.js 
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
       console.log(points, evt);
    };

}]);