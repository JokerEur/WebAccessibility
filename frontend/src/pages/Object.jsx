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
import { CartContext } from "../context/context";

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
  return (
        
    <div className="">
      <Nav className="z-30"/>
     
      

     <div className="pt-40">
     <div className="w-[92%] min-h-[500px] p-2 mx-auto z-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover h-[480px] w-[480px] object-cover rounded-lg" src={products.image} alt=""/>
              <div className="flex ml-5 relative  w-full flex-col text-left  justify-between leading-normal">

              <h5 className="mb-5 text-2xl font-bold  text-gray-900 dark:text-white"> {products.product_name}</h5>
                <p className="my-3 font-normal text-gray-700 dark:text-gray-400 w-max">  <b>Фирма: </b> {products.manufacturer_name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">  <b>Описание: </b> Здесь должно было быть полное описание данного продукта, но разработчики не хотели тратить время на сбор такого количества разных описаний для заполнения нашего маркетплейса. Время, которое было сэкономлено разработчиками, использовалось в благих целях и позволило разработать больше прекрасных функций для повышения веб-доступности платформы.</p>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400"> <b>Цена: </b> {products.price}₽</p>
                <div>
                
                <Link to={"/cart"} className='w-full rounded-lg  focus:ring-8 focus:ring-blue-500'>
        <div
          onClick={()=> (setCartItem(prev=>[...prev, products]))}
          className=" rounded-lg bg-blue-600 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         
        >
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
