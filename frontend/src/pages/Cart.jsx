// Страница католога товаров

import React, { Suspense, useContext, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import axios from "axios";
import { AuthContext, CartContext } from "../context/context";
import { Checkbox, Label, Modal, Select, Table,} from 'flowbite-react';
import OrderForm from "../components/OrderForm";


function Cart() {
  const {isAuth}= useContext(AuthContext)
    const [openModal, setOpenModal] = useState('');
    const modalProps = { openModal, setOpenModal };
    const {CartItem, setCartItem}= useContext(CartContext)
    const [del, setDel]= useState(false)
    const [order, setOrder]= useState(false)
    console.log(CartItem)
    // const [photos, setPhotos] = useState([])

    useEffect(()=>{
        if(CartItem[0]!=undefined)
    {
        localStorage.setItem('cart', JSON.stringify(CartItem));
        console.log(localStorage)
        setDel(false)
    }
    if(CartItem[0]==undefined&& del)
    {
        localStorage.setItem('cart', JSON.stringify(CartItem));
        console.log(localStorage)
        setDel(false)
    }
    },[CartItem])
  return (
        
    <div 
    className={" dark:bg-slate-950 dark:text-white  "+ isAuth.contrast +' '+ isAuth.monoColor+' '+ isAuth.changeColor+" " +isAuth.saturate+ " "+isAuth.differentColor}
    >
      <Nav className="z-30" />
      <div className="   h-full   pb-10 pt-20 px-3 text-gray-400 font-semibold mt-2 w-full ">      
        {CartItem.map((photo,index) =>
          <div key={index}  className="my-2 p-2 flex flex-col items-center bg-white-100 dark:bg-slate-700 border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 ">
            <img className="object-cover w-full rounded-lg h-full  md:w-48 md:h-48 md:m-2 md:object-cover md:rounded" src={photo.image} alt=""/>
            <div className="flex relative  w-full flex-col text-left  justify-between leading-normal">
              <h5 className="mb-3 text-2xl font-bold  text-gray-900 dark:text-white"> {photo.product_name}</h5>
              <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 w-max">  <b>Фирма: </b> {photo.manufacturer_name}</p>
              <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 ">  <b>Описание: </b> Здесь должно было быть полное описание данного продукта, но разработчики не хотели тратить время на сбор такого количества разных описаний для заполнения нашего маркетплейса. Время, которое было сэкономлено разработчиками, использовалось в благих целях и позволило разработать больше прекрасных функций для повышения веб-доступности платформы.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <b>Цена: </b> {photo.price}₽</p>
              <div>
                {console.log(CartItem.filter(item => item.product_id != photo.product_id))}
                <div
                  onClick={()=> (setCartItem(CartItem.filter(item => item.product_id != photo.product_id)), setDel(true))}
                  className="flex items-center md:absolute mx-auto bottom-0 right-2 w-max  rounded-lg bg-pink-500 focus:scale-110 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-8 focus:ring-pink-500 focus:bg-pink-600 dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
                  >
                  <svg class="w-[18px] h-[18px] inline-block mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                  </svg>
                  del
                </div>
              </div>
            </div>   
          </div>
        )}
        {CartItem[0]!=undefined?
          <div
            onClick={()=> ( modalProps.setOpenModal('dismissible'), setOrder(true))}
            className=" absolute w-full  rounded-lg bg-blue-600 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            <div className='mx-auto flex items-center w-max'>
                <svg class="w-[18px] h-[18px] inline-block mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z"/>
                </svg>
                Buy
              </div>
            </div>
        
          :
          <div className="h-full pt-[20%]">
            { order&&
              <h4 className="mb-2 text-3xl font-bold  text-gray-900 dark:text-white"> Заказ успушно оформлен!</h4>
            }
            <h5 className="mb-2 text-2xl font-medium  text-gray-900 dark:text-white"> Empty</h5>
            <Link to={"/"} className='  rounded-lg  '>
              <div
                className=" w-[50%] mx-auto rounded-lg bg-pink-500 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-8 focus:ring-pink-500 focus:bg-pink-800 dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-800"
              >
                <div className="w-max mx-auto flex items-center">
                  <svg class="w-[18px] h-[18px] inline-block mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4m-2 2V3M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.938-11H17l-2 7H5m0 0L3 4m0 0h2M3 4l-.792-3H1"/>
                  </svg>
                  Выбрать из каталога
                </div>ё
              </div>
            </Link>
          </div>
        }
      </div>
      <Modal dismissible show={modalProps.openModal === 'dismissible'} onClose={() => modalProps.setOpenModal(undefined)}>
        <Modal.Body className='rounded dark:bg-gray-700'>
          <OrderForm setCartItem={setCartItem} setDel={setDel} modalProps={modalProps}/>
        </Modal.Body>
      </Modal>
    </div> 
  );
};

export default Cart;
