import AboutController from './about.ctrl.js';

export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/about', {
        templateUrl: 'app/pages/about/about.tpl.html',
        controller: AboutController,
        resolve: {
            anyNameFn: function(){
                console.log('ran before view and controller')
            },
            meta: function(){
                document.title = 'About'
            }
        }
    })
}