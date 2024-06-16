const myAppWrapperConst = angular.module('myAppWrapper', []);

myAppWrapperConst.controller('MyAppWrapperController', ['$scope', function($scope){
    $scope.mainTitle = 'Welcome To My App';
    // console.log(window);

    // map stuff
    var myMapName = L.map("map").setView([53.39224146577022, -6.245791730975309], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(myMapName);

    // markers
    let marker1 = L.marker([53.39469855834784, -6.246551458874416]).addTo(myMapName);
    marker1.bindPopup('wuzuppp').openPopup();

    let marker2 = L.marker([53.394621787129545, -6.257795278943546]).addTo(myMapName);


    // circle
    var circle1 = L.circle([53.39265127846775, -6.249941771032666], {
        color: 'red', 
        fillColor: '#f03', 
        fillOpacity: 0.5,
        radius: 200
    }).addTo(myMapName);

    var circle2 = L.circle([53.40181209025722, -6.247924749875226], {
        color: 'red', 
        fillColor: '#f03', 
        fillOpacity: 0.5,
        radius: 200
    }).addTo(myMapName);


    // polygon
    let polygonOne = L.polygon(
        [
            [53.396566615309695, -6.23290437955387],
            [53.390117633276546, -6.237925474775581],
            [53.392165035024554, -6.226381247300023],
        ],
        {
            color: "violet",
        }
    ).addTo(myMapName);
    

    // var popup = L.popup()
    // .setLatLng([51.513, -0.09])
    // .setContent("I am a standalone popup.")
    // .openOn(myMapName); // this opens it by default

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(myMapName);
    }
    
    myMapName.on('click', onMapClick);


    // end of the controller
}])