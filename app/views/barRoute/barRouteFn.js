export default /*@ngInject*/ function ($routeProvider) {
    $routeProvider.when('/bar', {
        templateUrl: 'app/views/barRoute/bar.route.tpl.html',
        controller: BarController,
        resolve: {
            anyNameFn: function(){
                console.log('omg it ran')
            },
            meta: function(){
                 document.title = 'Bar page'
            }
        }
    });
}

/*@ngInject*/
function BarController($scope){
    console.log('bar controller ran')
}