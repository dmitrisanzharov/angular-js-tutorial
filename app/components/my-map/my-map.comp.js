import myMainWrapperConst from "/app/app.js";

myMainWrapperConst.directive("myMapComponent", [
	function () {
		return {
			templateUrl: "app/components/my-map/my-map.tpl.html",
			controller: function ($scope) {
				// console.log('my map is live');

				let map = L.map("map").setView(
					[53.39217764878661, -6.245824149202039],
					13
				);
				L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
					maxZoom: 19,
				}).addTo(map);

				// marker
				let mainPositionMarker = L.marker([
					53.39217764878661, -6.245824149202039,
				]).addTo(map);
				mainPositionMarker.bindPopup("mainPositionMarker");

				// polygon
				let polygonOne = L.polygon(
					[
						[53.39691188679983, -6.256038001094173],
						[53.39138429258542, -6.211835197005608],
						[53.37295379332113, -6.258355429658039],
					],
					{
						color: "green",
					}
				).addTo(map);
				polygonOne.bindPopup("polygonOne");

				// circle
				let circleOne = L.circle(
					[53.39217764878661, -6.245824149202039],
					{
						color: "violet",
						fillColor: "red",
						radius: 500,
					}
				).addTo(map);
				circleOne.bindPopup("circleOne");

                function onMapClick(e) {
                    console.log("You clicked the map at " + e.latlng);
                }
                
                map.on('click', onMapClick);

				// end of the controller
			},
		};
	},
]);
