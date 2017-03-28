console.log(data1);

var companyAddress = data1[0].address;
var companyCity = data1[0].city;
var companyBeaconsDeployed = data1[0].beacons_deployed;
var companyClients = data1[0].clients;

var companyContactEmail = data1[0].contact_email
var companyContactName = data1[0].contact_name
var companyContactPhone = data1[0].contact_phone
var companyContactPosition = data1[0].contact_position

//console.log(companyAddress, companyCity, companyBeaconsDeployed, companyClients);
var obj = {};
var data = [];

for(var i=0; i < data1.length-1; i++){ 
        if(data1[i].wifi==true){

            var companyName = data1[i].name;
            var companyAddress = data1[i].address;
            var companyCity = data1[i].city;
            var companyCountry = data1[i].country;
            var companyDescription = data1[i].description;
            var companyBeaconsDeployed = data1[i].beacons_deployed;
            var companyClients = data1[i].clients;
            var companyNumb = data1[i].number_of_employees;
            var companyWebsite = data1[i].website;
            var companyYear = data1[i].year_founded;


            var companyContactEmail = data1[i].contact_email
            var companyContactName = data1[i].contact_name
            var companyContactPhone = data1[i].contact_phone
            var companyContactPosition = data1[i].contact_position

            obj.name = companyName;
            obj.address = companyAddress;
            obj.city = companyCity;
            obj.country = companyCountry;
            obj.desc = companyDescription;
            obj.beacons = companyBeaconsDeployed;
            obj.clients = companyClients;
            obj.numb = companyNumb;
            obj.web = companyWebsite;
            obj.year = companyYear;


            obj.email = companyContactEmail;
            obj.contact = companyContactName;
            obj.phone = companyContactPhone;
            obj.position = companyContactPosition;

            data.push(
                {
                    name: companyName, 
                    address: companyAddress, 
                    city: companyCity, 
                    country: companyCountry,
                    desc : companyDescription,
                    beacons : companyBeaconsDeployed,
                    clients : companyClients,
                    numb : companyNumb,
                    web : companyWebsite,
                    year : companyYear,
                    email : companyContactEmail,
                    contact : companyContactName,
                    phone : companyContactPhone,
                    position : companyContactPosition,
                }
            );

        }
   
}

console.log(data);
console.log(JSON.stringify(data));