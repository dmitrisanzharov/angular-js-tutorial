import homeRoute from "./home/home.route.js";
import oneRoute from "./one/one.route.js";
import errorRoute from "./error/error.route.js";


function allRoutes(myAngularModuleConst){
    myAngularModuleConst.config(["$routeProvider", homeRoute]).config(["$routeProvider", oneRoute]).config(["$routeProvider", errorRoute]);
}

export default allRoutes;