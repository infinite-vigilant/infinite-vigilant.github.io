function initMap() {

  var styleArray = [
    {
      featureType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
  ];

  var mapDiv = document.getElementById('contact-map');
  if (!mapDiv) return;

  var LatLng = {lat: 20.2942 , lng: 85.7444};
  var LatLngMarker = {lat: 21.2947, lng: 86.7434};

  var styledMap = new google.maps.StyledMapType(styleArray,
    {name: "Styled Map"});

  var map = new google.maps.Map(mapDiv, {
    zoom: 10,
    center: LatLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
    scrollwheel: false
  });

  var pin = document.querySelector('[data-pin]').dataset.pin;

  var marker = new google.maps.Marker({
    position: LatLngMarker,
    map: map,
    title: '7760 Haven St, Las Vegas, NV 89123',
    icon: '' + pin
  });

  var infowindow = new google.maps.InfoWindow();

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
