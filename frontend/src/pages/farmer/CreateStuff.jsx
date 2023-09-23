// Страница создания товаров 

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../../App.css';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../../components/Nav";


function Create(props) {

  return (
        
    <div>
       <div className="nav h-[60px] z-30 ">
        
        <a href="https://youtu.be/dQw4w9WgXcQ"  className='ml-1 pt-1' target="_blank" draggable="false" display="false">
            <img src="/static/MISIShunters.svg" className='ml-1 py-1' draggable="false" width="60%"/>
        </a>
        <br/>
        <w className='  mr-[200px] mt-[10px]'>
           
                <w className="text-3xl"> 
                    FARMER ACCOUNT
                </w>
           
            <b>&nbsp;&nbsp;&nbsp;</b>
            <Link to='/profile'>
                <w lassName="text-base">
                     Аккаунт
                </w>
            </Link>
        </w>
        <button 
            type="logout" 
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Crete new
        </button>
        <form className="w-[50%]">   
        <button 
            type="logout" 
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            LogOut
        </button>
    
    </form>

      </div>

      


      <form action="/" method="post" className="mx-auto my-[15%] max-w-xl ">
                      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


                          <div>
                          <label htmlFor="county" className="block text-sm font-semibold leading-6 text-gray-900">
                            Название товара*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="text"
                              name="county"
                              id="county"
                              className="block w-full bg-gray-200 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="district" className="block text-sm font-semibold leading-6 text-gray-900">
                            Описнаие товара*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="text"
                              name="district"
                              id="district"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                            Категория*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="text"
                              name="address"
                              id="address"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      
                        <div className="sm:col-span-2">
                          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Происхождение товара*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="text"
                              name="company"
                              id="company"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="coordinate" className="block text-sm font-semibold leading-6 text-gray-900">
                            Дата производства*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="date"
                              name="coordinate"
                              id="coordinate"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          
                        </div>

                        <div>
                          <label htmlFor="object_type" className="block text-sm font-semibold leading-6 text-gray-900">
                            Дата истечения срока годности*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="date"
                              name="object_type"
                              id="object_type"
                              className="block w-full bg-gray-200 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="square" className="block text-sm font-semibold leading-6 text-gray-900">
                            Сертификация*
                          </label>
                          <div className="mt-2.5">
                            <input
                            required = "true"
                              type="text"
                              name="square"
                              id="square"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="owner" className="block text-sm font-semibold leading-6 text-gray-900">
                            Маркировка*
                          </label>
                          <div className="mt-1">
                            <input
                            required = "true"
                              type="text"
                              name="owner"
                              id="owner"
                              className="block w-full bg-gray-200 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="media" className="block text-sm font-semibold leading-6 text-gray-900">
                            Фотография (ссылкой)*
                          </label>
                          <div className="mt-1">
                            <input
                            required = "true"
                              type="url"
                              name="media"
                              id="media"
                              className="block w-full bg-gray-200  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                    
                        
                      </div>

                      <div className="mt-10">
                        <button
                          type="submit"
                          className="block w-full bg-gray-200  rounded-md bg-green-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          принять
                        </button>
                       
                        <br/>
                      </div>
                  </form>


               </div>
        
      
       
  

    );
};

export default Create;
