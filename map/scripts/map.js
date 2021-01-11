mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2V0b2lhcyIsImEiOiJja2pyaWJxOXAwbzdxMnFxaGdkYTFoYXZ1In0.TFNqRx4vybO5YNArNlzXgw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [43, 42], // starting position [lng, lat]
  zoom: 5, // starting zoom
});
var mymap = L.map("map").setView([41.554084100110657, 41.535656236327569], 5);

let cities = [
  { lng: 44.11627684796798, lat: 41.97608529363848 },
  { lng: 43.60877099778301, lat: 41.99264404923778 },
  { lng: 43.03720878047915, lat: 42.100775006645904 },
  { lng: 42.9959481749722, lat: 41.627296728261484 },
];
for (let i = 0; i < 4; i++) {
  let marker = new mapboxgl.Marker({
    color: "#33D5FF",
    draggable: false,
  })
    .setLngLat(cities[i], cities[i])
    .addTo(map);
}
map.on("click", function (e) {
  console.log(e.lngLat);
});
