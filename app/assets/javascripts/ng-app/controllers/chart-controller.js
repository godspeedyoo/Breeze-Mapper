angular.module('myApp')
.controller('TransactionCtrl', ['userService', 'locationService', 'transactionService', '$scope',
  function (userService, locationService, transactionService, $scope) {

  // define default filter settings
  $scope.filters = { earning: false, charge: false, userId: null }

  // initialize chartData to be passed into chartjs values
  $scope.earnings = { data: [ [] ], labels: [], series: ['Earnings'] };
  $scope.charges = { data: [ [] ], labels: [], series: ['Charges'] };

  // utility function to reset and trigger re-rendering of chart
  $scope.resetChartData = function() {
    $scope.earnings = { data: [ [] ], labels: [], series: ['Earnings'] };
    $scope.charges = { data: [ [] ], labels: [], series: ['Charges'] };
  } 

  // locationService.getLocations().success(function(response) {
  //   $scope.locations = response;
  // })

  userService.getUsers().success(function(response) {
    $scope.users = response;
  })

  $scope.getTransactions = function(options) {
    // reset data if it exists
    $scope.resetChartData();
    // use service to send get request and store and format the response in chart's data & labels
    transactionService.getTransactions(options).success(function(response) {
      var earnings = response[0];
      var charges = response[1];

      earnings.forEach(function(el, i, arr) {
        $scope.earnings.data[0].push(parseInt(el.amount));
        $scope.earnings.labels.push(el.created_at.split('T')[0].slice());
        // if (i % 20 != 0 && earnings.length > 20) { $scope.earningsLabels.push("") }
        // else { $scope.earningslabels.push( el.created_at.split('T')[0].slice() )}
      });

      charges.forEach(function(el, i, arr) {
        $scope.charges.data[0].push(parseInt(el.amount));
        $scope.charges.labels.push(el.created_at.split('T')[0].slice());
      });
    })
  }
  
  // chart.js 
  // $scope.onClick = function (points, evt) {
  //    console.log(points, evt);
  // };


}]);