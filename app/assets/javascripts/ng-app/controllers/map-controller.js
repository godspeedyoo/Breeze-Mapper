angular.module('myApp')
.controller('MapCtrl', ['$scope', '$rootScope', 'dataService',
  function ($scope, $rootScope, dataService) {
    var map;
    var markers = [];
    var dataService = dataService;
    // this allows the map instance from link to be passed into the
    // controller
    this.registerMap = function (myMap) {
      var center = myMap.getCenter(),
        latitude = center.lat(),
        longitude = center.lng();

      map = myMap;
      $scope.latitude = latitude;
      $scope.longitude = longitude;
      console.log("Map registered.");
    };


    $scope.getLocations = function (userId) {
      $scope.locations = dataService.data[userId].locations;
    }

    $scope.generateMarkers = function () {
      $scope.clearMarkers();

      var locations = $scope.locations;
      for (loc in locations) {

        var myLatLng = new google.maps.LatLng(
          locations[loc].latitude, 
          locations[loc].longitude);

        markers.push(new google.maps.Marker({
          position: myLatLng,
          map: map
        }));
                
      }
    }

    $scope.clearMarkers = function () {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }


    // Listen for the 'submit' event coming from control panel
    $rootScope.$on('submit', function (scope, userId) {
      $scope.getLocations(userId);
      $scope.generateMarkers();
      // $scope.latitude = 40;
      // $scope.longitude = -130;
      // map.setCenter(new google.maps.LatLng($scope.latitude, $scope.longitude));
    })
}]);


  // var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     title: 'Hello World!'
  // });