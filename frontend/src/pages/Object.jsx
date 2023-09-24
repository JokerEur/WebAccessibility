// Страница объекта

import React, { Suspense, useContext, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import {URL} from '../data/editProject'

import {Card, Sidebar} from "flowbite-react";
import axios from "axios";
import { AuthContext, CartContext } from "../context/context";

function Object(props) {
  const params = useParams();
  const [products, setProducts]=useState([])

  const {CartItem, setCartItem}= useContext(CartContext)
  useEffect(()=>{ 
    axios.post(URL+'api/product/'+params.id)
      .then(response => {
        
        setProducts(response.data)
      }).catch(error => {
        console.error('Error:', error);
      });
  
  
      
  },[])
  const {isAuth, setIsAuth}= useContext(AuthContext)
  return (
        
    <div
    className={" dark:bg-slate-950 dark:text-white  "+ isAuth.contrast +' '+ isAuth.monoColor+' '+ isAuth.changeColor+" " +isAuth.saturate+ " "+isAuth.differentColor}
    >
      
      <Nav className="z-30" />
      

     <div className="pt-40 ">
     <div className="w-[92%] min-h-[500px] p-2 mx-auto z-10 flex flex-col items-center bg-white-100 dark:bg-slate-700 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover h-[480px] w-[480px] object-cover rounded-lg" src={products.image} alt=""/>
              <div className="flex ml-5 relative  w-full flex-col text-left  justify-between leading-normal">

              <h5 className="mb-5 text-2xl font-bold  text-gray-900 dark:text-white"> {products.product_name}</h5>
                <p className="my-3 font-normal text-gray-700 dark:text-gray-400 w-max">  <b>Фирма: </b> {products.manufacturer_name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">  <b>Описание: </b> Здесь должно было быть полное описание данного продукта, но разработчики не хотели тратить время на сбор такого количества разных описаний для заполнения нашего маркетплейса. Время, которое было сэкономлено разработчиками, использовалось в благих целях и позволило разработать больше прекрасных функций для повышения веб-доступности платформы.</p>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400"> <b>Цена: </b> {products.price}₽</p>
                <div>
                
                <Link to={"/cart"} className='w-max rounded-lg  focus:ring-8 focus:ring-blue-500'>
        <div
          onClick={()=> (setCartItem(prev=>[...prev, products]))}
          className="w-max flex items-center rounded-lg bg-blue-600 focus:scale-110 px-4 py-3 text-center text-md font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
        >
          <svg class="w-[18px] h-[18px] inline-block mr-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg>
          Add to cart
        </div>
        </Link>
                </div>
              </div>   
                    
            </div>
     </div>
            
          
              
          
         
          
    </div>
        
      
       
  

    );
};

export default Object;
