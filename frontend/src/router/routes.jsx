// import About from "../pages/About";
import {LOGIN_ROUTE, HOME_ROUTE, OBJECT_ROUTE, ACCOUNT_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";
import Object from "../pages/Object";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Cart from "../pages/Cart";

import Account from "../pages/user/Account";

import AccountFarm from "../pages/farmer/Account";
import ObjectFarm from "../pages/farmer/SendOrder";
import Create from "../pages/farmer/CreateStuff";

import AccountAdmin from "../pages/admin/Account";

export const privateRoutes = [
    {path: '/', Component: Home, exact: true},
    {path: '/:id', Component: Home, exact: true},
    {path: ACCOUNT_ROUTE, Component: Account, exact: true},
    {path:'object/:id', Component: Object, exact: true},
    {path: '/chat/:id', Component: Chat, exact: true},
    {path:'/cart', Component: Cart, exact: true},
    ]
export const farmRoutes = [
    {path: '/', Component: AccountFarm, exact: true},
    {path: '/object/date', Component: ObjectFarm, exact: true},
    {path: '/object/create', Component: Create, exact: true},
    // {path: '/chat/:id', Component: <Chat/>, exact: true},
    ]

export const adminRoutes = [
    {path: '/', Component: AccountAdmin, exact: true},
    // {path: '/chat/:id', Component: <Chat/>, exact: true},
    ]

export const publicRoutes = [
    {path: LOGIN_ROUTE, Component: <Auth/>, exact: true},
]
