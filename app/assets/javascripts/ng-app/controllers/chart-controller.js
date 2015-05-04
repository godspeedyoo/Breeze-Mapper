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

  $scope.getTransactions = function(transaction_type) {
    transactionService.getTransactions(transaction_type).success(function(response) {
      $scope.transactions.earnings = response;

      $scope.transactions.earnings.forEach(function(el, i, arr) {
        // returns suppressed labels due to lack of grouping
        // of data label points in chartjs library.
        // This allows for inefficient use of space in array elements 
        // that are used as spacers and can be concern in a large 
        // data set, however is a temporary workaround to enable clean labels.
        $scope.chartData.earnings.push(el.amount);
        // store empty string to 'skip' (every 20) the label from being rendered.
        if (i % 20 != 0) { $scope.chartData.earningDates.push("") }
        else { 
          $scope.chartData.earningDates.push(
            // applies chart-ready formatting to dates
            el.created_at.split('T')[0].slice()
        )}
      });
    })
  }
  

  transactionService.getTransactions('charge').success(function(response) {
    $scope.transactions.charges = response;
  })
  
  // chart.js 

  $scope.labels = $scope.chartData.earningDates;
  $scope.series = ['Earned', 'Charged'];
  $scope.data = [
      $scope.chartData.earnings
  ];
  $scope.onClick = function (points, evt) {
     console.log(points, evt);
  };


}]);