angular.module('myApp')
.controller('HomeCtrl', ['locationService', '$scope', 
	function (locationService, $scope) {
    $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
}]);