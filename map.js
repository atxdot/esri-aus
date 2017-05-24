
//create map
var map;

require(["esri/map",
		 "esri/dijit/BasemapToggle",
		 "dojo/domReady!"
		], function(
		Map, BasemapToggle
		) {
		
		map = new Map("map", {
    		basemap: "dark-gray",
        	center: [-98.2, 30.4], // lon, lat
        	zoom: 9
		});
	
		var toggle = new BasemapToggle({
			map: map,
			basemap: "hybrid",
		}, "BasemapToggle");
		toggle.startup();
		
	});