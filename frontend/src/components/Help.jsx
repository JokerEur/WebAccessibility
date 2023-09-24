import React, { useContext, useState } from 'react';

import '../App.css';
import {Link} from 'react-router-dom';
import VoiceSearch from './VoiceSearch';
import { Modal } from 'flowbite-react';
import { AuthContext } from "../context/context";
import FirstLaunchForm from "../components/FirstLaunchForm";
import ThemeToggle from './ThemeToggle';

function Help() {
    const [openModal, setOpenModal] = useState('');
    const modalProps = { openModal, setOpenModal };
    
  return (
      <>
      
<button className='flex mx-auto h-[45px] items-center bg-blue-600 focus:bg-blue-800 hover:ring-8 hover:ring-blue-500 focus:ring-blue-500 focus:ring-8   rounded-lg text-white hover:bg-blue-800 ' onClick={() => modalProps.setOpenModal('dismissible')}>
<svg class="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
</button>
<Modal  dismissible show={modalProps.openModal === 'dismissible'} size='4xl' onClose={() => modalProps.setOpenModal(undefined)}>
                          {/* <Modal.Header>Terms of Service</Modal.Header> */}
                          <Modal.Body className='rounded dark:bg-gray-700'>
                           вставить картинку
                        </Modal.Body>
                      </Modal>

          
</>


  );
}

export default Help;

