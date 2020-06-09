// Checks code to see if it is working
console.log("working");

// creates a map centered at specified coords and a zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Creates background for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// adds graymap tile layer to the map
streets.addTo(map);