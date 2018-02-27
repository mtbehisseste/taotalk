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
      var category = markerElem.getAttribute('category');
      var address = markerElem.getAttribute('address');
      var point = new google.maps.LatLng(
        parseFloat(markerElem.getAttribute('lat')),
        parseFloat(markerElem.getAttribute('lng'))
      );
      var status = markerElem.getAttribute('status');

      // set info window
      var infowincontent = document.createElement('div');

      var categorytext = document.createElement('text');
      categorytext.textContent = "類別: " + category
      infowincontent.appendChild(categorytext);
      infowincontent.appendChild(document.createElement('br'));

      var addresstext = document.createElement('text');
      addresstext.textContent = "地址： " + address
      infowincontent.appendChild(addresstext);
      infowincontent.appendChild(document.createElement('br'));

      var pointtext = document.createElement('text');
      pointtext.textContent = "座標: " + point
      infowincontent.appendChild(pointtext);
      infowincontent.appendChild(document.createElement('br'));

      var statustext = document.createElement('text');
      statustext.textContent = "處理狀態: " + status
      infowincontent.appendChild(statustext);

      // mark different status markers
      switch (status) { 
        case "結案":
          var iconimage = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
          break;
        case "滿意度調查中":
          var iconimage = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";  
          break;
        case "處理中":
          var iconimage = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";  
          break; 
      }
 
      // set markers and events
      var marker = new google.maps.Marker({
        map: map,
        position: point,
        icon: iconimage,
      });

      marker.addListener('mouseover', function () {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', function () {
        infoWindow.close();
      });

      // marker.addListener('click', function () {
      //   marker.setMap(null);
      // });

///////////////////////////////////////////////////////////
      //////TODO: search box add click set null and remove marker
      //////////////////////////
    })
  });
}

initMap();