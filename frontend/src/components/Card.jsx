// карточка товара
import React, { useContext, useEffect, useState } from 'react';
import {Card} from "flowbite-react";
import '../App.css';
import { AuthContext, CartContext } from '../context/context';

import { Link } from 'react-router-dom';

function Cards({item, speak, w, params}) {
  
//  const imageStyles = 'filter: '+customFilter
  // console.log(imageStyles)

  const {isAuth, setIsAuth}= useContext(AuthContext)
  const {CartItem, setCartItem}= useContext(CartContext)
  
  let pic=''
  if(isAuth.offImg=='true'|| isAuth.offImg == true )
    {
      pic=''
    }
    else {
      pic=item.image
    }
  
  return (
    <div
    key= {item.product_id}
    className={w+' inline-block mt-1 p-2 cursor-pointer hover:scale-105 focus:scale-105 ease-in-out duration-300 rounded-2xl '    }
    onMouseEnter={()=>speak(item.product_name)}
    onMouseLeave={()=>speak('')}
    onFocus={()=>speak(item.product_name)}
    
>
  
  <Card
      imgSrc={pic}
      className='bg-gray-50  dark:bg-slate-700 dark:border-0 dark:ring-blue-900'
    >
      <Link to={"/object/"+item.product_id} className='w-full rounded-lg'>
      <h5 className="text-xs whitespace-pre-wrap font-normal tracking-tight text-gray-900 dark:text-white">
        <p className={`truncate font-semibold ${isAuth.largeText}`}>
          {item.product_name}
        </p>
        {item.manufacturer_name}
      </h5>
      
      </Link>
      <span className="text-sm font-bold text-gray-900 dark:text-white">
          {item.price}₽
        </span>
      <div className="flex items-center justify-between">
        
        <div>
          
        </div>
        <Link to={"/object/"+item.product_id} className='mr-2 w-max rounded-lg focus:scale-110 focus:ring-8 focus:ring-blue-500'>
        <div
          
          className="flex items-center text-center rounded-lg bg-blue-600 focus:scale-110 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
        >
        <svg class="w-6 h-6 text-white inline-block mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg>
          View 
        </div>
        </Link>
        <Link to={"/cart"} className='w-full rounded-lg  focus:ring-8 focus:ring-blue-500'>
        <div
          onClick={()=> (setCartItem(prev=>[...prev, item]))}
          className="flex items-center rounded-lg bg-blue-600 focus:scale-110 px-1 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
        >
          <svg class="w-[18px] h-[18px] inline-block mr-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg>
          Add to cart
        </div>
        </Link>
        
      </div>
    </Card>
  
    
    </div>
  );
}

export default Cards;

