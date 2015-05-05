angular.module('myApp')
.controller('ChartCtrl', ['userService', 'locationService', 'transactionService', '$scope',
  function (userService, locationService, transactionService, $scope) {

  // define default filter settings
  $scope.filters = { earning: false, charge: false, userId: null }

  // initialize chartData to be passed into chartjs values
  $scope.chartData = {};
  $scope.chartData.transactions = {};
  $scope.chartData.data = [];
  $scope.chartData.labels = [];

  // utility function to reset and trigger re-rendering of chart
  $scope.resetChartData = function() {
    $scope.chartData.data = [];
    $scope.chartData.labels = [];
    $scope.labels = [];
    $scope.series = [];
    $scope.data = [];
  } 

  locationService.getLocations().success(function(response) {
    $scope.locations = response;
  })

  userService.getUsers().success(function(response) {
    $scope.users = response;
  })

  $scope.getTransactions = function(transaction_type) {
    // reset data if it exists
    $scope.chartData.transactions = {};
    $scope.resetChartData();

    transactionService.getTransactions(transaction_type).success(function(response) {
      $scope.chartData.transactions = response;

      $scope.chartData.transactions.forEach(function(el, i, arr) {
        // returns suppressed labels due to lack of grouping
        // of data label points in chartjs library.
        // This allows for inefficient use of space in array elements 
        // that are used as spacers and can be concern in a large 
        // data set, however is a temporary workaround to enable clean labels.
        $scope.chartData.data.push(el.amount);
        // store empty string to 'skip' (every 20) the label from being rendered.
        if (i % 20 != 0 && $scope.chartData.transactions.length > 20) { $scope.chartData.labels.push("") }
        else { 
          $scope.chartData.labels.push(
            // applies chart-ready formatting to dates
            el.created_at.split('T')[0].slice()
        )}
      });
    })

    $scope.labels = $scope.chartData.labels;
    $scope.series = ['Earned', 'Charged'];
    $scope.data = [ $scope.chartData.data ];
  }
  

  // chart.js 
  // $scope.onClick = function (points, evt) {
  //    console.log(points, evt);
  // };


}]);