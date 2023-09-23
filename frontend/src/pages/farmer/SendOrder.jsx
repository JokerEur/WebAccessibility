// Страница отправки товаров в определенный день

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../../App.css';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../../components/Nav";


function ObjectFarm(props) {

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

      


      create table

               </div>
        
      
       
  

    );
};

export default ObjectFarm;
