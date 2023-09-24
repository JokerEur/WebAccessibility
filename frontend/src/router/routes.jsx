// import About from "../pages/About";


import Object from "../pages/Object";
import Home from "../pages/Home";
import Cart from "../pages/Cart";


export const privateRoutes = [
    {path: '/', Component: Home, exact: true},
    {path: '/:id', Component: Home, exact: true},
    {path:'object/:id', Component: Object, exact: true},
    {path:'/cart', Component: Cart, exact: true},
    ]


