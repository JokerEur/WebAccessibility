import { useState, useEffect } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AppRouted from "./components/AppRouted";
import {AuthContext, CartContext, ProjectsContext } from './context/context';
import Nav from "./components/Nav";
import ThemeToggle from './components/ThemeToggle';



function App() {
  const [isAuth, setIsAuth] = useState('')
  const [CartItem, setCartItem] = useState([])
  const [Proj, setProj] = useState([])

  useEffect(()=>{
    console.log(localStorage)
    setIsAuth(localStorage)
    setCartItem(JSON.parse(localStorage.getItem('cart')))
  },[])
  
  const [count, setCount] = useState(0)

  return (
    <div >
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <CartContext.Provider value={{CartItem, setCartItem}}>
          <ProjectsContext.Provider value={{Proj, setProj}}>
            <BrowserRouter>
              <div className='w-min fixed right-0 top-3 z-40'>
                <ThemeToggle />
              </div>
              <AppRouted/>
            </BrowserRouter>
          </ProjectsContext.Provider>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
