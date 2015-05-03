angular.module('myApp')
.controller('ChartCtrl', ['userService', 'locationService', 'transactionService', '$scope',
	function (userService, locationService, transactionService, $scope) {

  $scope.transactions = {};
  $scope.chartData = {};
  $scope.chartData.earnings = [];

  locationService.getLocations().success(function(response) {
  	$scope.locations = response;
  })

  userService.getUsers().success(function(response) {
  	$scope.users = response;
  })

  transactionService.getTransactions('earning').success(function(response) {
    $scope.transactions.earnings = response;
    
    $scope.transactions.earnings.forEach(function(el, i, arr) {
     $scope.chartData.earnings.push(el.amount);
     $scope.chartData.
    })
  })

  transactionService.getTransactions('charge').success(function(response) {
    $scope.transactions.charges = response;
  })
  
  // chart.js 

  $scope.labels = $scope.chartData.earnings;
  $scope.series = ['Earned', 'Charged'];
  $scope.data = [
      $scope.chartData.earnings,
      [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
     console.log(points, evt);
  };


}]);