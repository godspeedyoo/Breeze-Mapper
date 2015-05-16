angular.module('myApp')
.directive('googleMaps', [function () {
  return {
    controller: 'MapCtrl',

    link: function (scope, elem, attrs, ctrl) {
      var mapOptions;
      var latitude = attrs.latitude;
      var longitude = attrs.longitude;
      var map;

      mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(latitude, longitude)
      };

      map = new google.maps.Map(elem[0], mapOptions);

      // pass instance of map to controller to allow maniuplation of google map
      // objects within controller.
      ctrl.registerMap(map);
    }
  }

}]);

