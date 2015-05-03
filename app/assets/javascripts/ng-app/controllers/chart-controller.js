angular.module('myApp')
.controller('ChartCtrl', ['userService', 'locationService', 'transactionService', '$scope',
	function (userService, locationService, transactionService, $scope) {

  $scope.transactions = {};
  $scope.chartData = {};
  $scope.chartData.earnings = [];
  $scope.chartData.earningDates = [];

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
      if (i % 20 != 0) { $scope.chartData.earningDates.push("") }
      else { $scope.chartData.earningDates.push(el.created_at.split('T')[0].slice())}
    });
  })

  transactionService.getTransactions('charge').success(function(response) {
    $scope.transactions.charges = response;
  })
  
  // chart.js 

  $scope.labels = $scope.chartData.earningDates;
  $scope.series = ['Earned', 'Charged'];
  $scope.data = [
      $scope.chartData.earnings
  ];
  $scope.options = { showXLabels: 10 }
  $scope.onClick = function (points, evt) {
     console.log(points, evt);
  };


}]);