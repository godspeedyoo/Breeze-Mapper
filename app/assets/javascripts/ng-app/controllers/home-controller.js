angular.module('myApp')
.controller('HomeCtrl', ['locationService', 'userService', 'transactionService','$scope', 
  function (locationService, userService, transactionService, $scope) {

  locationService.getLocations().success(function(response) {
  	$scope.locations = response;
  })

  userService.getUsers().success(function(response) {
  	$scope.users = response;
  })

  transactionService.getTransactions('charge').success(function(response) {
  	$scope.transactions = response;
  })


}]);