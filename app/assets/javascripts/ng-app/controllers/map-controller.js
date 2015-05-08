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
    };

    // populates an array of LatLng objects
    $scope.getLocations = function (userId) {
      $scope.locations = [];
      var locations = dataService.data[userId].locations;
      for (loc in locations) {
        $scope.locations.push(new google.maps.LatLng(
          locations[loc].latitude, 
          locations[loc].longitude));
      }
    }

    $scope.dropWithTimeout = function (marker) {
      setTimeout(function() { $scope.addMarker(marker) }, 500);
    }

    $scope.drop = function () {
      $scope.clearMarkers();
      for (var i = 0; i < $scope.locations.length; i++) {
        $scope.addMarker($scope.locations[i]);
      }
    }

    $scope.addMarker = function (position) {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }

    $scope.clearMarkers = function () {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    $scope.setZoom = function () {
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].getPosition());
        map.fitBounds(bounds);
      }
      // bounds.extend(myLatlng); map.fitBounds(bounds);
      // map.setCenter(bounds.getCenter());

      // map.fitBounds(bounds);
    }
    
    // var markers = //some array;
    // var bounds = new google.maps.LatLngBounds();
    // for(i=0;i<markers.length;i++) {
    //  bounds.extend(markers[i].getPosition());
    // }

    // map.fitBounds(bounds);


    // Listen for the 'submit' event coming from control panel
    $rootScope.$on('submit', function (scope, userId) {
      $scope.getLocations(userId);
      $scope.drop();
      $scope.setZoom();
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