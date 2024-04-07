import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.component('barComponent', {
    templateUrl: 'app/components/bar/bar.tpl.html',
    bingings: {},
    controller: function BarComponentController($http){
        // console.log('this', this);
        $http.get('https://jsonplaceholder.typicode.com/users').success(el => console.log(el))
    }
})