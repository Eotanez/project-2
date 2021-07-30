

// Create Tile
var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //id: "mapbox/streets-v11",
    id: 'mapbox/light-v9',
    //attribution: ...,
    accessToken: API_KEY,
    tileSize: 512,
    zoomOffset: -1
});

// Adding Color
function getColor(d) {
    return d > .65  ? '#67000d' :
           d > .60  ? '#a50f15' :
           d > .55  ? '#cb181d' :
           d > .50  ? '#ef3b2c' :
           d > .45  ? '#fb6a4a' :
           d > .40  ? '#fc9272' :
           d > .35  ? '#fcbba1' :
           d > .30  ? '#fee0d2' :
                      '#fff5f0' ;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.gunOwnership),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


// Create Layers

var year2013 = L.geoJson(statesData2013, {style: style, onEachFeature : function(feature, layer) {
    if (feature.properties.sourceLang == "en") {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");
    }
    else {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");}}})//.bindTooltip(feature.properties.gunOwnership.toString());
var year2014 = L.geoJson(statesData2014, {style: style, onEachFeature : function(feature, layer) {
    if (feature.properties.sourceLang == "en") {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");
    }
    else {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");}}})//.bindTooltip("feature.properties.gunOwnership");
var year2015 = L.geoJson(statesData2015, {style: style, onEachFeature : function(feature, layer) {
    if (feature.properties.sourceLang == "en") {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");
    }
    else {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");}}})//.bindPopup(feature.properties.gunOwnership);
var year2016 = L.geoJson(statesData2016, {style: style, onEachFeature : function(feature, layer) {
    if (feature.properties.sourceLang == "en") {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");
    }
    else {
        layer.bindTooltip("<h4>"+feature.properties.gunOwnership+"</h4>");}}})//.bindTooltip(feature.properties.gunOwnership);

// More Layer stufff

var baseMaps = {
    "light-v9": light
};

var overlayMaps = {
    "2013":year2013,
    "2014":year2014,
    "2015":year2015,
    "2016":year2016
};




// Create map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [light, year2013]
  });

// Add Layer Controller and add stuff to map

//L.control.layers(baseMaps).addTo(myMap);
L.control.layers(overlayMaps, baseMaps).addTo(myMap);

// Add legend

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, .30, .35, .40, .45, .50, .55, .60, .65],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + .01) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);



// Wrap in function tied to html event handler
// removeLayer() then addLayer()
