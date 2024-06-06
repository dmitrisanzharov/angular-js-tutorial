const mainWrapperConst = angular.module("myMainWrapperModule", []);

mainWrapperConst.controller("myMainWrapperController", [
	"$scope",
	function ($scope) {
		$scope.title1 = "this is title1";

		var map = L.map("map").setView(
			[53.39224146577022, -6.245791730975309],
			14
		);

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);

		var markerAldi = L.marker([
			53.398619759009144, -6.250598249478145,
		]).addTo(map);
		markerAldi.bindPopup("Shop is: Aldi");
		var markerLidl = L.marker([
			53.394218391073444, -6.248409566945605,
		]).addTo(map);
		markerLidl.bindPopup("Shop is: Lidl");

		var circle = L.circle([53.38428805218595, -6.241800604004207], {
			color: "red",
			fillColor: "#f03",
			fillOpacity: 0.5,
			radius: 500,
		}).addTo(map);

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

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }
        
        map.on('click', onMapClick);

		// end of the controller
	},
]);
