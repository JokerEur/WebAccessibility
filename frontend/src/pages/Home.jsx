// Домашняя страница

import React, { Suspense, useContext, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import {Card} from "flowbite-react";
import Cards from "../components/Card";
import {Table} from 'flowbite-react';
import 'flowbite';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import axios from "axios";
import {URL} from '../data/editProject'
import { AuthContext } from "../context/context";


function Home(props) {
  const params = useParams();
  const [len, setLen]= useState()
    const {isAuth, setIsAuth}= useContext(AuthContext)
    const { id:user_id } = props.user;
    const [fontSize, setFontSize] = useState({
        text:'text-base', 
        monoColor: false,
        contrast :  false,
        sound: false,
        voice : false,
        differentColor: false,
        changeColor: false,
        offImg: false,
        button: false,
        link:false,
    });
   
    const [products, setProducts]=useState([])
    const [category, setCategory]=useState([])
  useEffect(()=>{
    if (localStorage.getItem('auth')=='false')
        modalProps.setOpenModal('dismissible')
   
  },[isAuth])
  useEffect(()=>{
    console.log(params)
  if(!params.id){
    axios.post(URL+'api/products')
      .then(response => {
        console.log(response.data.length)
        setProducts(response.data)
        setFilteredData(response.data)
        setLen(response.data.length)
      }).catch(error => {
        console.error('Error:', error);
      });
  }
  else  {
    axios.post(URL+'api/category/'+params.id)
    .then(response => {
      console.log(response)
      setProducts(response.data)
      setFilteredData(response.data)
    }).catch(error => {
      console.error('Error:', error);
    });
  }
      
  },[params])
  useEffect(()=>{
    

    axios.post(URL+'api/categories')
      .then(response => {
        console.log(response)
        setCategory(response.data)
        setFilteredData2(response.data)
      }).catch(error => {
        console.error('Error:', error);
      });
      
  },[])

    function speak(text) {
        if(localStorage.getItem('sound')&&localStorage.getItem('sound')!=''&&localStorage.getItem('sound')!=null){
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = localStorage.getItem('sound');
            console.log("localStorage.getItem('sound')", localStorage, utterance.rate)
            speechSynthesis.speak(utterance);
        }
    }
    const [filteredData, setFilteredData] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);
    const handleFilterChange = (event) => {
        
        if (category && category.length > 0) {
            console.log('!!!!')
        // При изменении значения фильтра обновляем состояние
          const filterValue = event.target.value;
          const filteredData = category.filter((item) =>
            item.category_name.toLowerCase().includes(filterValue.toLowerCase())
          );
          setFilteredData2(filteredData);}
      };
      
  
  return (
        
      <div className={"relative dark:bg-gray-600 w-full "+ isAuth.contrast +' '+ isAuth.monoColor+' '+ isAuth.changeColor+" " +isAuth.saturate+ " "+isAuth.differentColor}>
        <Nav className="z-30" setFilteredData={setFilteredData} products={products} setFontSize={setFontSize}/>
        <div className="box1 fixed left-3 mt-20 h-[350px] w-[20%] ">
          <div className="box dark:bg-gray-500 dark:border-gray-800 min-h-[300px]  relative  items-center pb-3 px-3 font-semibold mt-2 w-full ">
            {isAuth.largeText=='text-3xl'
              ?
                <h6 className="inline-block font-medium text-3xl">
                  Категории
                </h6>
              :
                <h6 className="inline-block font-medium text-xl">
                  Категории
                </h6>
            }
            <input onChange={handleFilterChange } type="search" id="search-dropdown"  className="mb-3 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-100 border-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 hover:ring-8 hover:ring-blue-200 focus:ring-8 focus:ring-blue-200 " placeholder="Search" required/>
            <div  className="scrolling-area h-[300px] overflow-scroll scroll-smooth ">
              <Table className="w-[95%] mx-auto overflow-visible"  >
                <Table.Head>
                  <Table.HeadCell className="w-full py-2 px-1 text-left">
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                <Table.Row className=" dark:border-gray-500 dark:bg-gray-400">
                      <Table.Cell  className=" relative p-0 text-left hover:bg-blue-100 focus:bg-blue-100">
                        <Link  to={'/'} className='flex items-center focus:bg-blue-100 text-black p-2  h-full font-normal no-underline'>
                          <h6 className="w-full m-0">
                            All categories
                          </h6>
                          <h6 className="h-max  right-2 bottom-2 m-0">
                            {len} 
                          </h6>           
                        </Link>    
                      </Table.Cell>
                    </Table.Row>
                  {filteredData2.map((proj,index) =>
                    <Table.Row className="dark:border-gray-500 dark:bg-gray-400">
                      <Table.Cell  className=" relative p-0 text-left hover:bg-blue-100 focus:bg-blue-100">
                        <Link key={proj.category_id} to={'/'+proj.category_id} className='flex items-center focus:bg-blue-100 text-black p-2  h-full font-normal no-underline'>
                          <h6 className="w-full m-0">
                            {proj.category_name}
                          </h6>
                          <h6 className="h-max  right-2 bottom-2 m-0">
                            {proj.number_of_elements} 
                          </h6>           
                        </Link>    
                      </Table.Cell>
                    </Table.Row>
                  )}
                            
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className='relative mt-20 ml-[15%] pb-5 w-[75%] h-full inline-block'>
          {params.id && 
            <h5 className={isAuth.largeText}>
              {category.find((item) => item.category_id == params.id).category_name}
            </h5>
          }
          {filteredData.map((item,index) =>
            isAuth.largeText=='text-3xl'
              ?
                <Cards item={item} w='w-[500px]' isAuth={isAuth} speak={speak} params={params}/>
              :
                <Cards item={item} w='w-[250px]' isAuth={isAuth} speak={speak} params={params}/>
          )} 
        </div>
      </div>
  );
};

export default Home;
