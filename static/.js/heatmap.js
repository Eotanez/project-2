var myMap = L.map("map", {
  center: [38.161079, -96.805450],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// point to our flask generated API endpoint:
var url = "/api/heatmap";

// let's just make sure that our edits are being loaded, shall we?
console.log("i am in the right file");

// all I had to do to convert from CSV to JSON was swap out this:
// d3.csv(url).then( function(response) {
  d3.json(url).then( function(response) {

  // console.log(response);
  var heatArray2 = response;

  // see all that code commented out below?
  // with the json api, simply didn't need it as the API delivers 
  // and array of lists

  // var heatArray2 = [];

  // for (var i = 0; i < response.length; i++) {
  //   var lat = +response[i].latitude;
  //   var lng = +response[i].longitude;
  //     heatArray2.push([lat, lng]);
  //   }

  var heat = L.heatLayer(heatArray2, {
    radius: 35,
    blur: 25
  }).addTo(myMap);

});

