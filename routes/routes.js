var express = require('express');
var router = express.Router();
var addresses = require('../data/germany-test2.json');
var lupus = require('lupus');
//var geocoder = require("../modules/geocoder.js");
var fs = require('fs');
var util = require('util');

var googleMapArray = [];
var googleInfoArray = [];

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
        googleMapArray.push(addresses[n]);
      }

    }, function() {

      var locations = googleMapArray;


      res.render('map', {locations: locations, selectedCountry: selectedCountry});
      
      googleMapArray.length = 0; //clear the object after all is done

      });
          
   

    
});

router.get('/map', function(req, res, next) {
	
	

});

module.exports = router;
