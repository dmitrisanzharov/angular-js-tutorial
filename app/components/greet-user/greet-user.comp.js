angular.module("myMainWrapper").component("greetUser", {
    template: 'app/components/greet-user/greet-user.tmp.html',
    controller: function GreetUserController(){
        this.user = 'world';
        console.log('scope', this);
    }
});
