import mainModuleWrapperConst from '/app/app.js'

mainModuleWrapperConst.component("greetUser", {
		templateUrl: 'app/components/greet-user/greet-user.tmpl.html', // I can also: templateUrl: ‘filePath’ if needed
		controller: function GreetUserController() {
			this.user = "world, the user name is Seth!";
		},
	});