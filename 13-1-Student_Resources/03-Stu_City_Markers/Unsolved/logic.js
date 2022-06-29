// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"

},
{
  location: [34.0522, 118.2437],
  name: "Los Angeles",
  population: "3,973,000"
},
{
  location: [29.7604, 95.3698],
  name: "Houston",
  population: "2,313,000"
},
{  location: [41.2565, 95.9345],
  name: "Omaha",
  population: "479,529"
},
{  location: [41.8781, 81.6298],
  name: "Chicago",
  population: "2,699,000"
},
]
// Add code to create a marker for each city below and add it to the map
cities.forEach(function (cities){
  var market =L.marker(cities.location, {
    draggabke: true,
    title: cities.name,

  }).addTo(myMap);
  marker.bindPopup("City Name: " + cities.name + " Population: " + cities.population);
});
// newyork;
// chicago;
// houston;
// la;
// omaha;