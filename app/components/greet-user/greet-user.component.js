angular
	.module("mainModuleWrapper") // this is my MAIN module wrapper that is from ng-app
	.component("greetUser", {
		template: "Hello, {{$ctrl.user}}!", // I can also: templateUrl: ‘filePath’ if needed
		controller: function GreetUserController() {
			this.user = "world";
		},
	});
