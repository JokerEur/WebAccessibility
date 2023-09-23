import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/context';

function VoiceSearch({setFilteredData, products}) {
  const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const {isAuth, setIsAuth}= useContext(AuthContext)
  

  useEffect(() => {
    // Создание экземпляра распознавания речи
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      

      recognitionInstance.onstart = () => {
        setListening(true);
      };

      recognitionInstance.onend = () => {
        setListening(false);
      };

      recognitionInstance.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        setTranscript(speechToText);
        
        // Вызываем обработчик поиска с распознанным текстом
        handleSearch(speechToText);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  

  const startListening = () => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    console.log(isAuth.voice)
    if (recognition && (isAuth.voice!='false' || isAuth.voice!=false)) {
      recognition.start();
    }
  };

  const handleSearch = (query) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    // Ваша логика поиска на основе query
    console.log('Search query:', query);
  };

  useEffect(()=>{
    if (products && products.length > 0) {
      // При изменении значения фильтра обновляем состояние
        const filterValue = transcript;
        console.log(filterValue)
        const filteredData = products.filter((item) =>
          item.product_name.toLowerCase().includes(filterValue.toLowerCase())
        );
        console.log(filteredData)
        setFilteredData(filteredData);}
  },[transcript])

  return (
    <div>

    <div className="flex">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        
        
        <div className="relative w-full">
            <input onClick={startListening} onChange={(e)=>setTranscript(e.target.value) } type="search" id="search-dropdown" value= {transcript} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-600 border-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-800 hover:ring-8 hover:ring-blue-200 focus:ring-8 focus:ring-blue-200 " placeholder="Search" required/>
            <button  className=" flex items-center absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  focus:bg-blue-800">
              <svg className="w-4 h-4 inline-block mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                
              </svg>
              Search
            </button>
        </div>
    </div>

      
    </div>
  );
}

export default VoiceSearch;
