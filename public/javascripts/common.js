
var infowindow = null;
var marker;


function initMap(){

  var map = new google.maps.Map(document.getElementById('map'), {           
        zoom: 3,
        center: {lat: 50.0000, lng: 10.0000}
    });

  var infowindow = new google.maps.InfoWindow(); /* SINGLE */

    //  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; uncomment if you want to add letter labels

    var markers = locObj.map(function(location, i) {
        var marker = new google.maps.Marker({ 
            position: {lat: location.latitude, lng: location.longitude}
            //label: labels[i % labels.length]
        });
        google.maps.event.addListener(marker, 'click', function (evt) {
            infowindow.setContent("<h4>Company: "+location.Company+"</h4><h4>Address: <a href='http://maps.apple.com/?q="+location.lat+","+location.lng+"'>"+location.formattedAddress+"</a></h4><h4>Phone: <a href='tel:"+location.Phone+"'>"+location.Phone+"</a></h4>");
            infowindow.open(map, marker);
        });
        return marker;
        var a = "<a href='http://maps.apple.com/?q='"+location.lat+","+location.lng+"'></a>";
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); 

  
}