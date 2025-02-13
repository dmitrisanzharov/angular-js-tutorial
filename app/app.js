// imports
import allPagesFn from "./pages/indexPagesMain.js";
import allControllersStandAlone from "./controllers/controllersIndex.js";
import allServices from "./services/servicesIndex.js";
import allComponents from "./components/componentsIndex.js";
import allDirectives from "./directives/directivesIndex.js";
import allFilters from "./filters/filtersIndex.js";

const dataDummy = [{first_name: 'Dimi', id: 1, last_name: 'Smith'}, {first_name: 'Bob', id: 2, last_name: 'Connoly'}, {first_name: 'John', id: 3, last_name: 'Stewart'}];

const myAngularAppConst = angular.module("MyAngularAppMainModule", ["ngRoute", "ngMaterial", "ngMessages", "dataGrid", "pagination"]);

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);