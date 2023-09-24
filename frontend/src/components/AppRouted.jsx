import React, { Suspense, useEffect , useState, } from "react";
import '../App.css';
import { Routes, Route, Navigate, redirect } from 'react-router-dom';
import { privateRoutes } from '../router/routes';


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
    
const authh= ""
let routesToRender;

    routesToRender = privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>} exact={true} />
      ));
  


    return (
        
        <Routes>
        {console.log("!!")}
        {routesToRender}
        <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    ) 
};

export default AppRouted;
