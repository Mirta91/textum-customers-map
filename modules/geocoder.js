var NodeGeocoder = require('node-geocoder');
 
var geocoder = function(data) {
    console.log("BFKABGFKABGK");
    var options = {
      provider: 'google',
      // Optional depending on the providers 
      httpAdapter: 'https', // Default 
      apiKey: 'AIzaSyAwSoa3Oqbf5MU8ZxyLfZ4-UdRzqm1GgKQ', // for Mapquest, OpenCage, Google Premier 
      formatter: null         // 'gpx', 'string', ... 
    };
     
    var geocoder = NodeGeocoder(options);
     
     

  }


module.exports = geocoder;