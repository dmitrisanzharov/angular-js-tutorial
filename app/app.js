// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';
import allServices from './services/servicesIndex.js';
import allComponents from './components/componentsIndex.js';
import allDirectives from './directives/directivesIndex.js';
import allFilters from './filters/filtersIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute', 'ngMaterial', 'ngMessages']);

myAngularAppConst.config(function($mdIconProvider){
    $mdIconProvider.icon('puppy', 'app/icons/my-icon-doggy.svg');
    $mdIconProvider.icon('shield', 'app/icons/my-icon-shield.svg')
})

myAngularAppConst.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default').primaryPalette('red').accentPalette('lime');
})


allPagesFn(myAngularAppConst); // router basically
// allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);


myAngularAppConst.controller('MyAngularAppController', MyAngularAppController);

function MyAngularAppController ($scope, addTwoNumbersService, $filter, $mdMedia){
    $scope.appTitle = 'Material UI thingy';

    $scope.forLabel = 'for label'
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.isGreaterThanSmall = $mdMedia('sm');
    $scope.isGreaterThanSmall = false;

    $scope.trueFalse = true;

    $scope.myFn = function(){
        console.log('ran')
        $scope.trueFalse = !$scope.trueFalse;
        console.log('scope', $scope)
    }
}