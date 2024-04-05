angular.module('myMainWrapper').component('barComponent', {
    template: '<h1>Bar component</h1>',
    controller: function BarComponentController(){
        this.barComponentVar = 'bar component var';
        console.log('scope in bar: ', this);
    }
})