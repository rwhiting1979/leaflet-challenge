// Function to determine marker size by magnitude
function markerSize(magnitude) {
    return magnitude * 4;
  }
  
  // Function to determine marker color by depth
  function markerColor(depth) {
    if (depth > 90) return '#ea2c2c';
    else if (depth > 70) return '#ea822c';
    else if (depth > 50) return '#ee9c00';
    else if (depth > 30) return '#eecc00';
    else if (depth > 10) return '#d4ee00';
    else return '#98ee00';
  }
  
  // Initialize the map on the 'map' div with a given center and zoom
  var myMap = L.map('map', {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Adding tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Earthquake data URL
  var earthquakeDataURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
  
  // Fetch the GeoJSON data and plot on the map
  d3.json(earthquakeDataURL).then(function(data) {
  
    // Function to create markers for each earthquake
    function createCircleMarker(feature, latlng) {
      let options = {
        radius: markerSize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.8
      }
      return L.circleMarker(latlng, options);
    }
  
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
      pointToLayer: createCircleMarker,
      // Function to call on each feature
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Location: " + feature.properties.place +
          "<br>Magnitude: " + feature.properties.mag +
          "<br>Depth: " + feature.geometry.coordinates[2] + " km");
      }
    }).addTo(myMap);
  
    // Set up the legend
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 30, 50, 70, 90],  // Depth intervals
    labels = [],
    from, to;

  // Loop through our intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + markerColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+') + ' km');
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

// Adding legend to the map
legend.addTo(myMap);
  })