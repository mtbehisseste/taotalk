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

  // load xml to javascript
  downloadUrl('markers.php', function (data) {
    var infoWindow = new google.maps.InfoWindow();
    var xml = data.responseXML;
    var markers = xml.documentElement.getElementsByTagName('marker');

    Array.prototype.forEach.call(markers, function (markerElem) {
      var address = markerElem.getAttribute('address');
      var point = new google.maps.LatLng(
        parseFloat(markerElem.getAttribute('lat')),
        parseFloat(markerElem.getAttribute('lng'))
      );

      var infowincontent = document.createElement('div');

      var text = document.createElement('text');
      text.textContent = address
      infowincontent.appendChild(text);
      infowincontent.appendChild(document.createElement('br'));

      var pointshow = document.createElement('text');
      pointshow.textContent = point
      infowincontent.appendChild(pointshow);

      var marker = new google.maps.Marker({
        map: map,
        position: point,
      });

      marker.addListener('mouseover', function () {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', function() {
        infoWindow.close();
      });

      marker.addListener('click', function () { 
        marker.setMap(null);
      })
    })
  });
}

initMap();