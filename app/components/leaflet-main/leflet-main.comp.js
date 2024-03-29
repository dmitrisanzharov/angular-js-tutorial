import myMainWrapperConst from "/app/app.js";

myMainWrapperConst.directive("leafLetMainComponent", [
	function () {
		return {
			templateUrl: "app/components/leaflet-main/leflet-main.tpl.html",
			controller: function ($scope) {
				console.log("all good");

				var map = L.map("map").setView([53.351946736273646, -6.267971273305236], 13);

				L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
					maxZoom: 19,
					attribution:
						'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				}).addTo(map);

                var variableMarker = L.marker([53.351946736273646, -6.267971273305236]).addTo(map);
                var variableMarker2 = L.marker([53.35199796840631, -6.2656538447413705]).addTo(map);
                
                var variablePolygon = L.polygon([
                    [53.36746725534943, -6.2864248711286175],
                    [53.36890120942698, -6.175016638687927],
                    [53.31017207006747, -6.349252934415664]
                ]).addTo(map);
                var variableCircle = L.circle([53.35199796840631, -6.2656538447413705], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(map);



                // they bind to VARIABLE NOT circle object
                variableMarker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); // to have it OPEN by Default
                variableMarker2.bindPopup("<b>Hello world!</b><br>I am a popup. 2");
                variableCircle.bindPopup("I am a circle.");
                variablePolygon.bindPopup("I am a polygon.");



                // * ------------------------------------
				// * end of controller
			},
		};
	},
]);
