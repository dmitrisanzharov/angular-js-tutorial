angular.module("myMainWrapper")
    .component("greetUserComponent", {
        templateUrl: "app/components/greet-user/greet-user.tmp.html",
        controllerAs: 'greetUserCtrl',
        controller: function GreetUserController(){
            // console.log('greet user', this);
            this.myName = 'BioWulf'; 
            this.myArr = [1,2,3,4,5]
        }
    })