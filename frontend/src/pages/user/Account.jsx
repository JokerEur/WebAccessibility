// Личный кабинет пользователей

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../../App.css';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../../components/Nav";

function Account(props) {

  return (
        
    <div>
      <Nav className="z-30"/>     
      <div className="menu mt-[15%]">
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
            <b className="right">Мои заказы</b>
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
            <br/>
            <Link to={'/chat/'+ '1' } >
              {console.log('!?!?')}                                
              <b className="underline"> чат 1</b>
            </Link>
            <br/>
            На данный момент чаты не заполнены, база не подключена.
            <br/>
            Это демонстрационный вариант, при наличии достаточного количества данных можно будет сформировать объект.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
