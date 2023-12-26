angular.module('mainAppModule').component('sayHello', {
    templateUrl: 'app/components/say-hello/say-hello.template.html',
    controllerAs: 'mahMan',
    controller: function SayHelloController(){
        this.user = 'Any Name'
        console.log('this', this);
    }
})