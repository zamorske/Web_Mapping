// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson";

// d3.json(url, function(data) {
//   // send the data.features object to the cr_Features function.
//   console.log(data)
//   cr_Features(data.features);
// });


// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.7129],
  zoom: 4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors", 
  // mapbox.streets-basic
  accessToken: API_KEY
}).addTo(myMap);


// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < countries.length; i++) {

//   // Conditionals for countries points
//   var color = "";
//   if (countries[i].points > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }

//   // Add circles to map
//   L.circle(countries[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust radius
//     radius: countries[i].points * 1500
//   }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
// }
