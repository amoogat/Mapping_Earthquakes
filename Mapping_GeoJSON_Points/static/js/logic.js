// creates a map centered at specified coords and a zoom level


/** Coordinates for a line */
// let line = [
// 	[33.9416, -118.4085],
// 	[37.6213, -122.3790],
// 	[40.7899, -111.9791],
// 	[47.4502, -122.3088]
// ];

// creates regular background for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Creates dark background for map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// adds both tile layers to the map
let baseMaps = {
	Street: streets,
	Dark: dark
  };

let map = L.map('mapid', {
	center: [30, 30],
	zoom: 2,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Adds GeoJSON data
let airportData = "https://raw.githubusercontent.com/amoogat/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Gets the GeoJSON data for map
// @param data is the airportData --> L.geoJSON --> addTo
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creates geoJSON layer for map
  L.geoJson(data, {
	// We turn each feature into a marker on the map.
	onEachFeature: function (feature, layer) {
		console.log(layer);
		layer.bindPopup("<h2>" + 'Airport code: ' + feature.properties.faa + "</h2>"
			+ "<h3>" + 'Airport name: ' + feature.properties.name + "</h3>");
	}
}).addTo(map);
});



/** Makes a yellow line connecting the coordinates */
// L.polyline(line, {
// 	color: "yellow"
//  }).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// Loops through each city and makes markers
// cityData.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
//         radius: city.population / 100000
//     })
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//   .addTo(map);
// });
