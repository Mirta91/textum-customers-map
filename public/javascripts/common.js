
var infowindow = null;
var marker;


function initMap(){

  var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
      gestureHandling: 'greedy',
        center: {lat: 50.0000, lng: 10.0000}
    });

  var infowindow = new google.maps.InfoWindow(); /* SINGLE */

  var myloc = new google.maps.Marker({
    clickable: false,
    icon: new google.maps.MarkerImage('images/current-location.png'),
    shadow: null,
    zIndex: 999,
    map: map
    });

  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
    var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    myloc.setPosition(me);
    }, function(error) {
        // ...
    });


    var markers = locObj.map(function(location, i) {
        var marker = new google.maps.Marker({ 
            position: {lat: location.latitude, lng: location.longitude}
            //label: labels[i % labels.length]
        });
        google.maps.event.addListener(marker, 'click', function (evt) {
            
            infowindow.setContent(
                "<h4>"+location.company+"</h4>"+
                "<a href='https://www.google.com/maps/search/?api=1&query="+location.latitude+","+location.longitude+"&query_place_id="+location.placeid+"'>Directions</a>"+
                "</div>");

            infowindow.open(map, marker);

        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); 

  
}
