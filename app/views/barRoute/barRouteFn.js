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
        },
        reloadOnSearch: false
    });
}

/*@ngInject*/
function BarController($scope, $location){
    console.log('bar controller ran');

    $scope.clickLocation = function(){
        console.log($location)
        $location.search({page: '5'});
        // http://127.0.0.1:5500/index.html#/bar?page=5
    }


    $scope.$on('$destroy', function() {
        console.log('destroyed');
    });
}