angular.
  module('phonecapApp').
  component('greetUser', {
    templateUrl: 'app/components/greet-user/greet-user.template.html', // does NOT work with ./greet-user.template.html  dunno why
    controllerAs: 'anyNameCtrl',
    controller: function GreetUserController() {
      this.user = 'world';
      console.log('this', this); // now you can see what is inside the component scope
    }
  });