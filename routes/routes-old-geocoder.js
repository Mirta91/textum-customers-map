var express = require('express');
var router = express.Router();
var addresses = require('../data/germanyBlanks.json');
var lupus = require('lupus');
//var geocoder = require("../modules/geocoder.js");
var fs = require('fs');
var util = require('util');
var NodeGeocoder = require('node-geocoder');

var googleMapArray = [];
var googleInfoArray = [];

 
var geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https', // Default 
      apiKey: 'AIzaSyBU6zxAC353xO1HDp54TJHNj2NGvwwIdRs', // for Mapquest, OpenCage, Google Premier 
      formatter: null         // 'gpx', 'string', ... 
    });

/*router.get('/scrapeit', function(req, res, next) {
  res.render('index', { data1: data1 });
});*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});


//select country and render map
router.post('/country', function(req, res){

  var selectedCountry = req.body.country;
  console.log("Selected country: " +selectedCountry);
  
  lupus(0, addresses.length, function(n) {

      //if selected country matches the json, save to an array
      if(addresses[n].Country == selectedCountry){
        googleMapArray.push(addresses[n].Street + " " + addresses[n].Zipcode + " " + addresses[n].City + " " + addresses[n].Country);
        googleInfoArray.push(addresses[n].Company + " Phone: " + addresses[n].Phone + "Group: " + addresses[n].Group);
      }

    }, function() {
          //geocode filtered jsons
          geocoder.batchGeocode(googleMapArray)  
          .then(function(result) {

          //console.log(JSON.stringify(result));
          
           fs.writeFile('./data.json', JSON.stringify(result, null, 2) , 'utf-8');

            /*var cleanedResult=[];
            var badAddresses=[];

              //if a value of an object in an array is empty, remove it
             for(var i=0; i < result.length; i++) {

                if (result[i].value.length !== 0) {
                  cleanedResult.push(result[i]); 
                }
                else if (result[i].value.length === 0){
                  badAddresses.push(result[i]); 
                }

              }

              //console.log(cleanedResult);
              //console.log(badAddresses);

              googleMapArray.length = 0; //clear the object after all is done
          
            /*var locations = cleanedResult;
            res.render('map', {locations: locations, selectedCountry: "Textum Customers ("+selectedCountry+")", data: googleInfoArray});*/
          });
    });

    
});

router.get('/map', function(req, res, next) {
	
	

});

module.exports = router;
