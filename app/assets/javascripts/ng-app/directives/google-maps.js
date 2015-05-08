angular.module('myApp')
.directive('googleMaps', function () {
  return {
    controller: 'MapCtrl',

    link: function (scope, elem, attrs, ctrl) {
      var mapOptions,
        latitude = attrs.latitude,
        longitude = attrs.longitude,
        map;

      mapOptions = {
        zoom: 8,
        disableDefaultUI: true,
        center: new google.maps.LatLng(latitude, longitude)
      };

      map = new google.maps.Map(elem[0], mapOptions);

      ctrl.registerMap(map);
    }
  }

});

