import about from "../pages/About/about";
import career from "../pages/Career/career";
import contact from "../pages/Contact/contact";
import faq from "../pages/FAQ/faq";
import Collection from "../pages/Topoffer/top";
import info from "../pages/detail/detail";
import Home from "../pages/home";
import LOGIN from "../pages/Authent/authent";
import Cart from "../pages/Form/Add cart/cartpg";
import Add from "../pages/Form/Address/add";
import PAY from "../pages/Form/Pay/pay";


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
    },
    {
        url :'/login',
        component : LOGIN,
    },
    {
        url :'/cartpg',
        component : Cart,
    }
    ,
    {
        url :'/add',
        component : Add,
    },
    {
        url :'/pay',
        component : PAY,
    }
]

export  {ROUTER};