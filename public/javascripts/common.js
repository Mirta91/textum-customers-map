
var infowindow = null;
var marker;


function initMap(){

  var map = new google.maps.Map(document.getElementById('map'), {           
        zoom: 5,
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
            
            infowindow.setContent(
                "<div class='hook'><span class='circle'></span>"+
                "<h4>Company: "+location.Company+"</h4>"+
                "<h4>Address: <a href='http://maps.apple.com/?q="+location.latitude+","+location.longitude+"'>"+location.formattedAddress+"</a></h4>"+
                "<h4>Phone: <a href='tel:"+location.Phone+"'>"+location.Phone+"</a></h4>"+
                "</div>"
                );


            var circle = $('.circle');
    
            if(location.confidence == null){
                circle.css("background-color", "#fbf2b6");
                circle.css("border-color", "#cdbc50");   
                $("<span class='alert-message'><a class='alert-message-bold yellow'>No value</a> - this address might not be right (not containing 'confidence' value)!</span>").insertAfter('.circle');            

            }

            else if(location.confidence >= 0.8){
                circle.css("background-color", "#99c377");
                circle.css("border-color", "#6ea045");
                $("<span class='alert-message'><a class='alert-message-bold green'>Correct!<a/> - this address is correct.</span>").insertAfter('.circle');           


            }
            else if(location.confidence < 0.8 && location.confidence >= 0.5){
                circle.css("background-color", "#fbf2b6");
                circle.css("border-color", "#cdbc50");   
                $("<span class='alert-message'><a class='alert-message-bold yellow'>Caution!<a/> - please double check this address.</span>").insertAfter('.circle');           

                
            }
            else if(location.confidence >= 0 && location.confidence < 0.5){
                circle.css("background-color", "#ebccd1");
                circle.css("border-color", "#a94442");
                $("<span class='alert-message'><a class='alert-message-bold red'>Warning!</a> - this address is probably right!</span>").insertAfter('.circle');            

            }
            

            infowindow.open(map, marker);
            //$('.hook').parent().css("background-color", "red");

        });
        return marker;
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); 

  
}
