const myAppWrapperConst = angular.module('myAppWrapperModule', []);

myAppWrapperConst.controller('MyMainController', [
    '$scope',
    function ($scope) {
        $scope.myTitle = 'Foo Title';

        // map stuff
        var map = L.map('map').setView([53.39224146577022, -6.245791730975309], 17);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

        // all markers
        let myHouseMarker = L.marker([53.39224146577022, -6.245791730975309]).addTo(map);
        myHouseMarker.bindPopup('<b>HelloWorld</b><br>I am a popup!').openPopup();

        let houseOnBottom = L.marker([53.39144281649606, -6.24595007572261]).addTo(map);
        houseOnBottom.bindPopup('<b>HelloWorld</b><br>I am a popup for house bottom!');

        let carIcon = L.icon({
            iconUrl: 'https://cdn.icon-icons.com/icons2/4233/PNG/512/marshall_paw_patrol_canine_patrol_icon_263825.png', // Replace with the URL of your icon
            iconSize: [38, 38], // Set the size of the icon
            iconAnchor: [22, 38], // The point of the icon which will correspond to marker's location
            popupAnchor: [-3, -38], // Point from which the popup should open relative to the iconAnchor
        });

        let carPark = L.marker([53.39259825804775, -6.248510072514804], { icon: carIcon }).addTo(map);

        let circleOne = L.circle([53.39232673309182, -6.246613575688916], {
            color: 'pink',
            fillColor: 'red',
            fillOpacity: 0.5,
            radius: 30,
        }).addTo(map);

        let myPolygon = L.polygon(
            [
                [53.39691188679983, -6.256038001094173],
                [53.39138429258542, -6.211835197005608],
                [53.37295379332113, -6.258355429658039],
            ],
            {
                color: 'lightpink',
            }
        ).addTo(map);

        var popup = L.popup().setLatLng([53.39227064344627, -6.247264125767641]).setContent('I am a standalone popup.').openOn(map);

        function onMapClick(e) {
            let coords = e.latlng;
            console.log('coords: ', coords);

            customPopup.setLatLng(coords).setContent('holly smokes').openOn(map);
        }

        map.on('click', onMapClick);

        // click popup
        let customPopup = L.popup();


    },
]);
