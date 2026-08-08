import { appModuleConst } from '../app.js';

appModuleConst.component('componentBar', {
    templateUrl: 'app/compTemp/bar.tpl.html',
    bindings: {
    },
    controller: ComponentOneController
});

function ComponentOneController() {
   
}