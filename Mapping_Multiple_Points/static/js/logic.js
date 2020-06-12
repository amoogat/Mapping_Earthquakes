// Checks code to see if it is working
console.log("working");

// creates a map centered at specified coords and a zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Get data from cities.js
let cityData = cities;

// Loops through each city and makes markers
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
        radius: city.population/ 100000
    })
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});

// Creates background for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// adds graymap tile layer to the map
streets.addTo(map);