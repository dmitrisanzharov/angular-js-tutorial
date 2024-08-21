import klTomlFilterFn from './klToMl.filter.js';

export default /*@ngInject*/ function allFilters(myAngularAppConst){
    myAngularAppConst.filter('klToml', klTomlFilterFn)
}