import barDirective from './bar/bar.drct.js';

export default /*@ngInject*/ function allDirectives(myAngularAppConst) {
    myAngularAppConst.directive('barDirective', barDirective)
}
