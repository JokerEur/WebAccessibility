import React, { Suspense, useEffect , useState, } from "react";
import '../App.css';
import { Routes, Route, Navigate, redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, farmRoutes, adminRoutes } from '../router/routes';

import Home from '../pages/Home.jsx'
import Auth from '../pages/Auth.jsx'
import Object from "../pages/Object";
import Account from '../pages/user/Account';

const AppRouted = () => {
//     const [auth, getAuth] = useState([])

//     useEffect(() => {
//         fetchAuth()
//     }, [])


//     const fetchAuth = () => {
//       fetch('http://127.0.0.1:8000/auth')
//           .then((res) =>
//               res.json())

//           .then((response) => {
//               console.log(response);
//               getAuth(response);
//           })

//   }
//   const user = true
    const user = {isAuth: true , role: '', id: '1', chat: '1', obj: '1', trash:''}
const authh= ""
let routesToRender;
if (user.role === "admin") {
    routesToRender = adminRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component user={user} />} exact={true} /> //props this equal user_id
    ))
} else if (user.role === "farm") {
    routesToRender = farmRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component user={user} />} exact={true} /> //props this equal user_id
    ))
} else {
    routesToRender = privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component user={user} />} exact={true} />
      ));
  
}

    return user.isAuth ? (
        
        <Routes>
        {console.log("!!")}
        {routesToRender}
        <Route path="*" element={<Navigate to="/" user={user}/>}/>
        </Routes>
    ) 
    : 
    (
        <Routes>
                <Route path='/auth' element={<Auth/>} />    
                <Route path='*' element={<Navigate to="/auth" />} />
            
        </Routes>
    );
};

export default AppRouted;
