function myMap() {
	var longlat=new google.maps.LatLng(40.177200, 44.503490);
	var mapOptions = {
	    center: longlat,
	    zoom: 17,
	    scrollwheel: false,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
        position: longlat,
        map: map,
        title: 'Hello World!'
    });
}

google.maps.event.addDomListener(window, 'load', myMap);