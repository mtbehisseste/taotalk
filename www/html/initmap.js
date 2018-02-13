// var apisrc = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEz3IOSna2hZYzb18cNrtaumEx05W9NSY&libraries=places&callback=initMap"
// loadScript(apisrc);

// // load api and callback initMap
// function loadScript(apisrc) {
//   var oHead = document.getElementsByTagName("HEAD")[0];
//   var oScript = document.createElement('script');
//   oScript.type = 'text/javascript';
//   oScript.src = apisrc;
//   oHead.appendChild(oScript);
//   oScript.onload = initMap();
// }

function initMap() {
  var taoyuan = {
    lat: 25,
    lng: 121.30
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: taoyuan,
    zoom: 12
  });

  // calling searcbox autocomplete
  Autocomplete(map);
}

initMap();