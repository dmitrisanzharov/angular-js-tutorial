function homeRoute($routeProvider) {
	$routeProvider.when("/home/:myVar1/:myVar2", {
		templateUrl: "app/routes/home/home.html",
		controller: function HomeController($scope, $routeParams) {
            console.log('home controller ran', $routeParams)
        },
		resolve: {
			meta: function () {
                console.log('resolve ran')
				document.title = "home";
			},
		},
	});
}

export default homeRoute;
