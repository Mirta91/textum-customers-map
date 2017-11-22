var express = require('express');
var router = express.Router();
var addresses = require('../data/_test-data.json');
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
router.post('/map', function(req, res){
    res.render('map', {locations: addresses});

});

router.get('/map', function(req, res, next) {
	
	

});

module.exports = router;
