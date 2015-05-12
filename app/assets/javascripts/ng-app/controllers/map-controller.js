angular.module('myApp')
.controller('MapCtrl', ['$scope', '$rootScope', 'dataService',
  function ($scope, $rootScope, dataService) {
    var map;
    var markers = [];
    var dataService = dataService;
    var infoWindow;    

    // listen for generic submit button and do everything marker/map related.
    $rootScope.$on('submit', function (scope, userId) {
      $scope.getMapData(userId);
      $scope.renderMarkers();
      $scope.setZoom();
    })

    // this.registerMap allows the map instance from link (in the directive) 
    // to be passed into the controller.
    this.registerMap = function (myMap) {
      var center = myMap.getCenter(),
        latitude = center.lat(),
        longitude = center.lng();
      map = myMap;
      $scope.latitude = latitude;
      $scope.longitude = longitude;
    };

    // populates an array of LatLng objects
    $scope.getMapData = function (userId) {
      $scope.locations = [];
      $scope.dates = [];

      var locations = dataService.data[userId].locations;
      for (loc in locations) {
        // store coordinates data to $scope
        $scope.locations.push(new google.maps.LatLng(
          locations[loc].latitude, 
          locations[loc].longitude));
        // store tooltip data - in this case it is only the created_at field
        $scope.dates.push(locations[loc].created_at.substring(0,10));
      }
    }

    $scope.renderMarkers = function () {
      $scope.clearMarkers();
      for (var i = 0; i < $scope.locations.length; i++) {
        $scope.addMarker($scope.locations[i], i);
      }
    }


    // index is passed in addMarker() and addTooltip() because the data which
    // they rely upon is stored in separate arrays $scope.locations and $scope.dates.
    // It is easier to deal with single arrays of relevant data, but 
    // this may cause issues if $scope.locations and $scope.dates need to
    // be reordered - I don't see a case for this here, however.
    $scope.addMarker = function (position, index) {
      var marker = new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      });
      $scope.addToolTip(marker, index);
      markers.push(marker);
    }

    $scope.addToolTip = function (marker, index) {
      // index is used here to reference the index at which tooltip data is stored
      var infoWindow = new google.maps.InfoWindow({content: $scope.dates[index] });
      // mouse over open tooltip
      google.maps.event.addListener(marker, 'mouseover', function () {
        infoWindow.open(map, marker);
      });
      // mouse out close tooltip
      google.maps.event.addListener(marker, 'mouseout', function () {
        infoWindow.close();
      });
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
    }
}]);
