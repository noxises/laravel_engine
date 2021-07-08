mapboxgl.accessToken = 'pk.eyJ1IjoiYm93bWFuMTE1NTEiLCJhIjoiY2twcW1laWs1MW1vbjJvcXFsb3F6bGs1ZyJ9.CbUCAyZPWZaNK-aWfx-Kcg';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/bowman11551/ckpqntbr60ln117r257v9y78g', // style URL
    center: [33.204803466796875,
        46.71161922789268], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

// Create a default Marker and add it to the map.
var marker = new mapboxgl.Marker({ color: '#fff'})
    .setLngLat([32.579717338085175, 46.65498350525506])
    .addTo(map);