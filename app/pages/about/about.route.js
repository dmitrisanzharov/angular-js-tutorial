export default /*@ngInject*/ function homeRoutes($routeProvider) {
    $routeProvider.when('/about/:pageId/:country', {
        templateUrl: 'app/pages/about/about.html',
        controller: 'AboutController',
        resolve: {
            meta: function(){
                document.title = 'About Page';
            },
            anyThing: function(){
                console.log('anyThing resolve for about route');
            },
            noReturn: function(){}
        }
    });
}
