import React, { useContext, useState } from 'react';

import '../App.css';
import {Link} from 'react-router-dom';
import VoiceSearch from './VoiceSearch';
import { Modal } from 'flowbite-react';
import { AuthContext } from "../context/context";
import FirstLaunchForm from "../components/FirstLaunchForm";
import ThemeToggle from './ThemeToggle';
import Help from './Help';

function Nav({setFilteredData,  setFontSize} ) {
    const {isAuth, setIsAuth}= useContext(AuthContext)
    // console.log(setFontSize)
    const [openModal, setOpenModal] = useState('');
    const modalProps = { openModal, setOpenModal };
    
  return (
    <div className='shadow bg-white-100 dark:bg-gray-700'>
      <div className="nav fixed xl:h-[70px] flex items-center z-30  dark:bg-slate-800">  
        <a href="https://youtu.be/dQw4w9WgXcQ"  className='ml-1 pt-1 w-[30px]' target="_blank" draggable="false" display="false">
            <img src="/static/MISIShunters.svg" className='ml-1 py-1' draggable="false" width="60%"/>
        </a>
        <br/>
        <div className=' mx-3'>
          <Link to='/' className='focus:text-xl focus:font-bold focus:text-blue-800' >
            <button className='bg-blue-600 flex items-center focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 mr-' >
              <svg class="w-6 h-6 inline-block mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
              </svg>
              Главная
            </button>
          </Link>
        </div>
        <div className=' mx-3'>
          <Link to='/cart' className='focus:text-xl focus:font-bold focus:text-blue-800' >
            <button className='bg-blue-600 flex items-center focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 mr-' >
              <svg class="w-[18px] h-[18px] inline-block mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
              </svg>
              Корзина
            </button>
          </Link>
        </div>
        <form className="min-w-[50%] 2xl:w-[70%] w-max mx-auto"> 
          {setFilteredData!=undefined&&
            <VoiceSearch setFilteredData={setFilteredData} />
          }  
        </form>
        <Help/>

        {setFontSize!=undefined&&
          <>
            <button className='flex mr-[70px] ml-1 items-center bg-blue-600 focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 ' onClick={() => modalProps.setOpenModal('dismissible')}>
              <svg class="w-6 h-6 text-white inline-block mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/>
                  <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </g>
              </svg>
              Параметры
            </button>
            <Modal  dismissible show={modalProps.openModal === 'dismissible'} size='4xl' onClose={() => modalProps.setOpenModal(undefined)}>
              <Modal.Body className='rounded dark:bg-gray-700'>
                <FirstLaunchForm modalProps={modalProps} setFontSize={setFontSize}/>
              </Modal.Body>
            </Modal>
          </>
        }
      </div> 
    </div>


  );
}

export default Nav;

