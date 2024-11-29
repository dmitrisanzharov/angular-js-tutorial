const myAngularAppConst = angular.module('myAngularAppModule', []);

myAngularAppConst.controller(
    'MyMainController',
    /*@ngInject*/ function ($scope) {
        $scope.title = 'My Main Controller';
        console.log('window', window);

        // map creation
        var map = L.map('map').setView([53.39224146577022, -6.245791730975309], 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 22,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // all other map stuff

        // icons
        var greenIcon = L.icon({
            iconUrl: 'https://cdn.icon-icons.com/icons2/4233/PNG/512/marshall_paw_patrol_canine_patrol_icon_263825.png',
            iconSize: [50, 50], // size of the icon
        });

        // markers
        let marker1 = L.marker([53.39224146577022, -6.245791730975309]).addTo(map);
        let marker2 = L.marker([53.39631555585503, -6.250550732635847], { icon: greenIcon }).addTo(map);


        // circles
        let circle1 = L.circle([53.39429588860662, -6.252601788775825], {
            color: 'red', 
            fillColor: '#f03', 
            fillOpacity: 0.5,
            radius: 1000
        }).addTo(map);
        


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


        // popups
        marker1.bindPopup("The Force is strong").openPopup();
        marker2.bindPopup("<b style='color: orange;'>This is a green marker</b>");
        

        // end of the controller
    }
);
