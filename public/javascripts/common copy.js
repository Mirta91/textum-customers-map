console.log(locObj.length);
var coordinates = [];
var infowindow = null;
var info = [];

for(var i=0; i < locObj.length; i++){
    if(locObj){
        coordinates.push({lat: locObj[i].latitude, lng: locObj[i].longitude});
        info.push({address: locObj[i].formattedAddress, company: locObj[i].Company, phone:locObj[i].Phone});
    }
}

    toObject(coordinates);
    toObject(info);

    console.log(info);

    var loc = toObject(coordinates);

    function toObject(arr) {
      var rv = {};
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
      return rv;
    }

function initMap() {
        	
    var map = new google.maps.Map(document.getElementById('map'), {   		
        zoom: 3,
        center: {lat: 50.0000, lng: 10.0000}
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = coordinates.map(function(location, i) {
        return new google.maps.Marker({	
            position: location,
            map: map,
            label: labels[i % labels.length]
        });
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); 

    infowindow = new google.maps.InfoWindow({
        content: "<h1>asd</h1>"
    });

    for (var i = 0; i < markers.length; i++) {

        var marker = markers[i];
        google.maps.event.addListener(marker, 'click', function () {
        // where I have added .html to the marker object.
            infowindow.setContent(this);
            infowindow.open(map, this);
        });
    }
}
