import { useState, useEffect } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AppRouted from "./components/AppRouted";
import {AuthContext, CartContext } from './context/context';
import Nav from "./components/Nav";



function App() {
  const [isAuth, setIsAuth] = useState('')
  const [CartItem, setCartItem] = useState([])
  useEffect(()=>{
    console.log(localStorage)
    setIsAuth(localStorage)
    setCartItem(JSON.parse(localStorage.getItem('cart')))
  },[])
  
  const [count, setCount] = useState(0)

  return (
    

<div 
// className={ isAuth.contrast +' '+ isAuth.monoColor+' '+ isAuth.changeColo}
>
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
    <CartContext.Provider value={{CartItem, setCartItem}}>

    
            <BrowserRouter>
              <AppRouted/>
              
            </BrowserRouter>
            </CartContext.Provider>
      </AuthContext.Provider>
</div>
    
    
  )
}

export default App
