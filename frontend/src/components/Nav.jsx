import React, { useContext, useState } from 'react';

import '../App.css';
import {Link} from 'react-router-dom';
import VoiceSearch from './VoiceSearch';
import { Checkbox, Label, Modal, Select, Table,} from 'flowbite-react';
import { AuthContext } from "../context/context";
import FirstLaunchForm from "../components/FirstLaunchForm";

function Nav({setFilteredData, products, setFontSize} ) {
    const {isAuth, setIsAuth}= useContext(AuthContext)
    const [openModal, setOpenModal] = useState('');
    const modalProps = { openModal, setOpenModal };
  return (
<div className='shadow'>
      <div className={"nav h-[60px] flex items-center z-30  dark:bg-gray-800"}>
        
        <a href="https://youtu.be/dQw4w9WgXcQ"  className='ml-1 pt-1' target="_blank" draggable="false" display="false">
            <img src="/static/MISIShunters.svg" className='ml-1 py-1' draggable="false" width="60%"/>
        </a>
        <br/>
        <div className='  mx-auto'>
            <Link to='/' className='focus:text-xl focus:font-bold focus:text-blue-800' >
               
            <button className='bg-blue-600 focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 mr-' >Главная</button>
              
            </Link>
          
           
        </div>
        <form className="min-w-[50%] w-max mx-auto">   
    <VoiceSearch setFilteredData={setFilteredData} products={products}/>
    
    
</form>
<button className='bg-blue-600 focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 mr-' onClick={() => modalProps.setOpenModal('dismissible')}>Особенности</button>
<Modal dismissible show={modalProps.openModal === 'dismissible'} size='4xl' onClose={() => modalProps.setOpenModal(undefined)}>
                          {/* <Modal.Header>Terms of Service</Modal.Header> */}
                          <Modal.Body>
                            <FirstLaunchForm modalProps={modalProps} setFontSize={setFontSize}/>
                        </Modal.Body>
                      </Modal>
      </div>
       
          
</div>
  );
}

export default Nav;

