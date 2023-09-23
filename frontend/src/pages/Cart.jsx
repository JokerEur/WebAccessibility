// Страница католога товаров

import React, { Suspense, useContext, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import axios from "axios";
import { CartContext } from "../context/context";
import { Checkbox, Label, Modal, Select, Table,} from 'flowbite-react';
import OrderForm from "../components/OrderForm";


function Cart() {

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
    // useEffect(()=>{
    //       axios.get('https://jsonplaceholder.typicode.com/photos_limit=10')
    //         .then(response => {
    //           setPhotos([...photos, ...response.data])
    //           console.log(response)
    //         })
    //         .finally();
        
    //   },[ photos])
  return (
        
    <div>
       <Nav className="z-30"/>
       <div className="box1 mt-10 relative  w-[92%] pt-[30px]">
          <div className="box   min-h-[700px]  relative   py-3 px-3 text-gray-400 font-semibold mt-2 w-full ">
            
          {CartItem.map((photo,index) =>
              <div key={index}  className="z-10 my-2 p-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-lg h-full  md:w-48 md:h-48 md:m-2 md:object-cover md:rounded" src={photo.image} alt=""/>
              <div className="flex relative  w-full flex-col text-left  justify-between leading-normal">
                <h5 className="mb-3 text-2xl font-bold  text-gray-900 dark:text-white"> {photo.product_name}</h5>
                <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 w-max">  <b>Фирма: </b> {photo.manufacturer_name}</p>
                <p className="mb-0 font-normal text-gray-700 dark:text-gray-400 ">  <b>Описание: </b> Здесь должно было быть полное описание данного продукта, но разработчики не хотели тратить время на сбор такого количества разных описаний для заполнения нашего маркетплейса. Время, которое было сэкономлено разработчиками, использовалось в благих целях и позволило разработать больше прекрасных функций для повышения веб-доступности платформы.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <b>Цена: </b> {photo.price}₽</p>
                <div>
                {console.log(CartItem.filter(item => item.product_id != photo.product_id))}
                {/* <Link to={"/cart"} className='w-full rounded-lg  focus:ring-8 focus:ring-blue-500'> */}
                    <div
                    onClick={()=> (setCartItem(CartItem.filter(item => item.product_id != photo.product_id)), setDel(true))}
                    className="md:absolute mx-auto bottom-0 right-2 md:w-[30%]  rounded-lg bg-red-500 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    
                    >
                    del
                    </div>
                {/* </Link> */}
                </div>
              </div>   
                    
            </div>
          )}
          {CartItem[0]!=undefined?
        //   <Link to={"/"} className='  rounded-lg  '>
          <div
        
              onClick={()=> ( modalProps.setOpenModal('dismissible'), setOrder(true))}
              className="  rounded-lg bg-blue-600 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              
              >
              Buy
              </div>
        //   </Link>
          
          :
          <div className="h-full py-[40%]">
          { order?
          <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white"> Заказ успушно оформлен!</h5>
          :
          <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white"> Empty</h5>}
            <Link to={"/"} className='  rounded-lg  '>
          <div
        
            //   onClick={()=> ( modalProps.setOpenModal('dismissible'), setOrder(true))}
              className=" w-[50%] mx-auto rounded-lg bg-blue-600 focus:scale-110 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-8 focus:ring-blue-500 focus:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              
              >
              Выбрать из каталога
              </div>
            </Link>
          </div>
         
          }
          
          </div>
          
            <Modal dismissible show={modalProps.openModal === 'dismissible'} onClose={() => modalProps.setOpenModal(undefined)}>
                          {/* <Modal.Header>Terms of Service</Modal.Header> */}
                          <Modal.Body>
                            <OrderForm setCartItem={setCartItem} setDel={setDel} modalProps={modalProps}/>
                        </Modal.Body>
                       
                      </Modal>
        </div>
    </div>
        
      
       
  

    );
};

export default Cart;
