// Личный кабинет пользователей

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../../App.css';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../../components/Nav";

import Table from 'react-bootstrap/Table';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AccountAdmin(props) {

  return (
        
    <div>
      <div className="nav h-[60px] z-30 ">
        
    <a href="https://youtu.be/dQw4w9WgXcQ"  className='ml-1 pt-1' target="_blank" draggable="false" display="false">
        <img src="/static/MISIShunters.svg" className='ml-1 py-1' draggable="false" width="60%"/>
    </a>
    <br/>
    <w className='  mr-[200px] mt-[10px]'>
       
            <w className="text-3xl"> 
                ADMIN ACCOUNT
            </w>
       
        <b>&nbsp;&nbsp;&nbsp;</b>
        <Link to='/profile'>
            <w lassName="text-base">
                 Аккаунт
            </w>
        </Link>
    </w>
    <form className="w-[50%]">   
    <button 
        type="logout" 
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
        LogOut
    </button>
</form>
  </div>
       {/* <div className="box3 my-[70px] z-10">
          <div className="box z-0">
            <b className='right'>
              Реестр
                <button
        className="bg-red-100 mt-1 text-black active:bg-red-200 font-bold uppercase text-sm ml-10 px-6 py-3 rounded mr-1 mb-1 ease-linear transition-all "
        type="button"
      >
        Создать объект
      </button>
      

   
            </b>  
            <div className="h-[430px] overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            
              <Table >
              <thead>
                <tr >
                  <th>ID объекта</th>
                  <th>округ</th>
                  <th>район</th>
                  <th>адрес</th>
                  <th>тип</th>
                  <th>состояние</th>
                  <th>собственник</th>
                </tr>
              </thead>

              <tbody>
                {/* {filteredData.map(item => (
                             <tr key={item.id}>
                                
                                <td>
                                  <Link to={'/object/'+ item.id + '?query='+ item.id} >
                                    <b className="underline"> {item.id}</b>
                                  </Link>
                                </td>                              
                                <td>{item.county}</td>
                                <td>{item.district}</td>
                                <td>{item.address}</td>
                                <td>{item.object_type}</td>
                                <td>{item.condition}</td>
                                <td>{item.owner}</td>
                            </tr>
                            
                            
                        ))} 
                  </tbody>
            </Table>
            </div>
            
          </div>
        </div> 
      

       <div className="menu mt-[20px]">
        <div className="box1">
        
    
<div class="flex flex-col bg-white m-auto p-auto  rounded-xl">

      <div class="flex overflow-x-scroll mt-10  scrollbar-hide pb-10 hide-scroll-bar rounded-2xl" >
        <div class="flex flex-nowrap   scrollbar-hide rounded-2xl" > 
         {mit.map((item) => (
           <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
            <b>встреча</b>
            <div className="pl-2 text-left"> <br/><br/>
            <b className="text-xl">Дата: </b> 
            <b className="text-xl font-normal">{item.date_of_meeting}</b>
            <br/>
            <b className="text-xl">Раб. группа: </b> 
            <b className="text-xl font-normal">{item.group} </b>
             
            <br/>
                <a href={item.url} >
            <b className="text-xl underline ">Ссылка</b>
                </a>
             
            <br/>
            <Link to={'/protocol/'+ item.agenda + '?query='+ item.agenda} >
            <b className="text-xl underline">Повестка: {item.agenda}</b>
                                  </Link><br/>
            </div>
            

          </black>
           </div>
         </div>
             
            
          ))} 
          
         
        </div>
      </div>
</div>

        </div>


      
      </div>
       <div className="menu mt-[20px]">
        <div className="box1 mt-[-150px]">
            <div className="box h-[450px]">
              
              <ResponsiveContainer  width="100%" height="100%" >
          <LineChart
            width={500}
            height={300}
            data={dataa}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="group_name" />
            <YAxis />
            
            <Legend />
            <Line type="monotone" dataKey="new" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="in_process" stroke="#F9BE26" />
            <Line type="monotone" dataKey="closed" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
              </div>
              
            </div>

            <div className="box2 h-[500px]"> 
          <div className="box h-[450px] mt-[-150px] ">
          <br/>
           <b className="right">Dashboard</b>
           <br/>
           <b className="text-xl "> На графике изображено распределение задач по рабочим группам с учетом статуса задачи на текущий момент.
           </b>
            
           <br/>
           <br/>
           {dataa.map((item) => (
            <>
            <b className="text-xl "> Рабочая группа: {item.group_name}</b>
            <br/>
            <b className="text-xl font-normal">всего задач:{item.all}</b>
            <br/>
            </>
           ))}
            
            </div>
      </div>
          </div> */}
<div className="menu mt-[200px]">
  
        {/* <div className="box1 mt-[-150px]">
            <div className="box h-[450px]">
              
              <ResponsiveContainer  width="100%" height="100%" >
          <LineChart
            width={500}
            height={300}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
              </div>
              
            </div> */}

            <div className="box4 mr-[1%]"> 
              <div className="box h-[390px] mt-[-150px] ">
              <br/>
              <b className="right">Календарь</b>
              <br/><br/>
              На данный момент календарь не заполнен, база не подключена.
              <br/>
              Это демонстрационный вариант, при наличии достаточного количества данных можно будет сформировать объект.
              </div>
              <div className="box h-[150px] mt-[10px] ">
              <br/>
              <b className="right">Банковская карта</b>
              <br/><br/>
              На данный момент реквизиты не заполнены, база не подключена.
              
              </div>
          </div>

          <div className="box2 h-[500px] mr-[1%]"> 
              <div className="box h-[550px] mt-[-150px] ">
              <br/>
              <b className="right">Заказы</b>
              <br/><br/>
              На данный момент заказы не заполнены, база не подключена.
              <br/>
              Это демонстрационный вариант, при наличии достаточного количества данных можно будет сформировать объект.
              </div>
          </div>

          <div className="box2 h-[500px]"> 
              <div className="box h-[550px] mt-[-150px] ">
              <br/>
              <b className="right">Чаты</b>
              <br/><br/>
              На данный момент чаты не заполнены, база не подключена.
              <br/>
              Это демонстрационный вариант, при наличии достаточного количества данных можно будет сформировать объект.
              </div>
          </div>
        </div>




        <div className="menu w-[100%]">
        <div className="box3">
        
    
<div class="flex flex-col bg-white m-auto p-auto  rounded-xl">

      <div class="flex overflow-x-scroll  scrollbar-hide pb-10 hide-scroll-bar rounded-2xl" >
        <div class="flex flex-nowrap   scrollbar-hide rounded-2xl" > 
        {/* {mit.map((item) => (
           <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
            <b>встреча</b>
            <div className="pl-2 text-left"> <br/><br/>
            <b className="text-xl">Дата: </b> 
            <b className="text-xl font-normal">{item.date_of_meeting}</b>
            <br/>
            <b className="text-xl">Раб. группа: </b> 
            <b className="text-xl font-normal">{item.group} </b>
             
            <br/>
                <a href={item.url} >
            <b className="text-xl underline ">Ссылка</b>
                </a>
             
            <br/>
            <Link to={'/protocol/'+ item.agenda + '?query='+ item.agenda} >
            <b className="text-xl underline">Повестка: {item.agenda}</b>
                                  </Link><br/>
            </div>
            

          </black>
           </div>
         </div>
             
            
          ))} */}
          <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         <div class="inline-block px-3">
           <div
             class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
           >
            <black className='right '>
              <b>карточка товара</b>
              <div className="pl-2 text-left"> <br/><br/>
                <b className="text-xl">ляляля</b> 
                <b className="text-xl font-normal">11</b>
                <br/>
                <b className="text-xl">ля ля ля ля ля </b> 
                <b className="text-xl font-normal">1</b>                
                <br/>
                <a  >
                  <b className="text-xl underline ">Ссылка</b>
                </a>              
                <br/>           
              </div>
            </black>
           </div>
         </div>
         

         
             
          
         
        </div>
      </div>
</div>

</div></div>
        </div>
        
      
       
  


        
      
       
  

    );
};

export default AccountAdmin;
