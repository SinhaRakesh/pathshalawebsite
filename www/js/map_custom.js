// Google Maps API
    function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        scrollwheel: false, 
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var mapProp2 = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        scrollwheel: false, 
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
      var map=new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
    }
    google.maps.event.addDomListener(window, 'load', initialize);