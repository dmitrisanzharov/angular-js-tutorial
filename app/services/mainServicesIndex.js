import myAngularAppConst from '../app.js';

// service imports 
import myServiceThatSaysHello from './myServiceThatSaysHello.srv.js';
import calcTwoNum from './calcTwoNum.srv.js';


function mainServicesIndex(myAngularAppConst){
    myAngularAppConst
        .service('myServiceThatSaysHello', myServiceThatSaysHello)
        .service('calcTwoNum', calcTwoNum)
}

export default mainServicesIndex;