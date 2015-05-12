'use strict';

angular.module('myApp')
.controller('TransactionCtrl', ['userService', 
                                'transactionService',
                                'ctrlPanelService', 
                                '$scope',
                                '$rootScope',
  function (userService, 
            transactionService, 
            ctrlPanelService,
            $scope,
            $rootScope) {

  // initialize data
  $scope.userId = ctrlPanelService.userId;

  // listeners waiting for control panel changes
  $rootScope.$on('updateUserId', function() {
    $scope.userId = ctrlPanelService.userId;
  });

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


  $rootScope.$on('submit', function() {
    // define options to pass to service
    var options = {'userId': $scope.userId };
    // reset data if it exists
    $scope.resetChartData();
    // use service to send get request and store and format the response in chart's data & labels
    transactionService.getTransactions(options).success(function(response) {
      var earnings = response[0];
      var charges = response[1];

      earnings.forEach(function(el, i, arr) {
        $scope.earnings.data[0].push(parseInt(el.amount));
        $scope.earnings.labels.push(el.created_at.split('T')[0].slice());
      });

      charges.forEach(function(el, i, arr) {
        $scope.charges.data[0].push(parseInt(el.amount));
        $scope.charges.labels.push(el.created_at.split('T')[0].slice());
      });
    })
  });

}]);