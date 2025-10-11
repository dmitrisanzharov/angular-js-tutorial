import aboutRoutes from './about/about.route.js';
import homeRoutes from './home/home.route.js';



export const pagesArray = [
   { name: 'home', hrefForLink: '#/home' },
   { name: 'about', hrefForLink: '#/about/1/ireland' },
];


export default function pagesIndexFn(appMainWrapperConstArg) {
    appMainWrapperConstArg.config(aboutRoutes).config(homeRoutes);
}