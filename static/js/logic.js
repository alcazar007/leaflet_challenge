// Creating map object
let map = L.map("map", {
    center: [32.83, -117.07],
    zoom:11
})

// tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY


}).addTo(map);

let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"


// color of mag
function chooseColor(mag) {
  switch (mag) {
    case mag > 5:
      return "yellow";
      case mag > 4:
        
  }
}
// Grabbing our GeoJSON data..
d3.json(queryUrl, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    style: function(feature) {
      return {
        color: "white",
        fillColor: "blue",
        fillOpacity: 0.5,
        weight: 1.5
      };

      
      // Giving each feature a pop-up with information pertinent to it
    layer.bindPopup("<h1>" + feature.properties.mag + "</h1> <hr> <h2>" + feature.properties.place + "</h2>");

    }
  }).addTo(map);
});


