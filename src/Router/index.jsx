import about from "../pages/About/about";
import career from "../pages/Career/career";
import contact from "../pages/Contact/contact";
import faq from "../pages/FAQ/faq";
import Collection from "../pages/Topoffer/top";
import info from "../pages/detail/detail";
import Home from "../pages/home";


const ROUTER = [
    {
        url :'/',
        component :Home,
    },
    {
        url :'/collection/*',
        component : Collection,
    },
    {
        url :'/about',
        component : about,
    },
    {
        url :'/contact',
        component : contact,
    },
    {
        url :'/careers',
        component : career,
    },
    {
        url :'/faq',
        component : faq,
    },
    {
        url :'/detail',
        component : info,
    }
]

export  {ROUTER};