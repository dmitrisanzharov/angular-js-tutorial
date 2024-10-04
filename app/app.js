import allControllers from './controllers/index.js'


const myAppWrapperConst = angular.module('myAppWrapperModule', []);

allControllers(myAppWrapperConst);
