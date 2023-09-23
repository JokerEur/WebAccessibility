// Чат

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import axios from 'axios';

function Chat() {


  const [auth, getAuth] = useState([])

      useEffect(() => {
          fetchAuth()
      }, [])
  
  
      const fetchAuth = () => {
        
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) =>
                res.json())
  
            .then((response) => {
                console.log(response);
                getAuth(response);
            })
  
    }
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(text)
        // const response = await axios.post('http://localhost:3000/submit', {
        //   text,
        // });
        // console.log(response.data); // Log the response from the backend
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
        
    <div>
     
      <Nav className="z-30"/>
      <div className="menu w-[900px] mt-[15%]">
        <div className="box2 h-[500px]"> 
          <div className="box h-[550px] mt-[-150px] ">
            <br/>
            <b className="right">
              Чаты
            </b>
            <br/>
            <div className="h-[90%] overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">  
            <table class="table-auto m-[auto]">
                <thead>
                  <tr >
                    <th></th>

                    
                  </tr>
                </thead>

                <tbody>
                  {auth.map(item => (
                    <tr key={item.id}>                        
                      <td>
                      <Link to={{pathname: '/chat/'+ item.id, state:{chat: item.id}}}>
                                    <b className="underline"> чат {item.id}</b>
                                    
                                  </Link>
                                  
                      </td>
                              
                    </tr>
                          
                          
                  ))} 
                </tbody>
              </table>
              </div>
            
            </div>
        </div>

        <div className="box1 mr-[1%]"> 
          <div className="box h-[550px] mt-[-150px] ">
            <br/>
            <b className="right">
              Переписка id
            </b>
            <br/>
            <br/>
            <div className="h-[430px] overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">            
              <table class="table-auto m-[auto]">
                <thead>
                  <tr >
                    <th></th>
                    <th></th>
                    <th></th>
                    
                  </tr>
                </thead>

                <tbody>
                  {auth.map(item => (
                    <tr key={item.id}>
                      <td className=" break-normal inline-block bg-sky-100 w-[100%] mt-1 rounded ml-0">
                        {item.name}
                      </td>     
                                              
                      <td>
                        {item.id}
                      </td>
                              
                    </tr>
                          
                          
                  ))} 
                </tbody>
              </table>
            </div>   
            <div class="relative">
              <form onSubmit={handleSubmit}>
                <input 
                  type="search" 
                  id="default-search" 
                  class="block w-full mt-1 h-[30px] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Ваше сообщение..." 
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}

              />
              <button 
                  type="submit" 
                  class="text-white absolute right-2 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                  Отправить
              </button>
              </form>
              
            </div>            
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Chat;
