// import About from "../pages/About";
import {LOGIN_ROUTE, HOME_ROUTE, OBJECT_ROUTE, ACCOUNT_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";
import Object from "../pages/Object";
import Home from "../pages/Home";
import Cart from "../pages/Cart";


export const privateRoutes = [
    {path: '/', Component: Home, exact: true},
    {path: '/:id', Component: Home, exact: true},
    {path:'object/:id', Component: Object, exact: true},
    {path:'/cart', Component: Cart, exact: true},
    ]


export const publicRoutes = [
    {path: LOGIN_ROUTE, Component: <Auth/>, exact: true},
]
