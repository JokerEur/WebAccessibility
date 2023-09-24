// карточка товара
import React, { useContext, useState } from 'react';
import '../App.css';
import { Checkbox, Label, Radio, Table, DarkThemeToggle, Flowbite} from 'flowbite-react';
import { AuthContext } from '../context/context';
import {postTaskData} from '../data/editProject'
import testPic from '../assets/testPic.png'

function FirstLaunchForm({ modalProps, setFontSize }) {
  const { setIsAuth}= useContext(AuthContext)
  const [sound, setSound]= useState(false)
  const [contrast, setContrast]= useState(false)
  const [changeColor, setChangeColor]=useState(false)
  const [saturate, setSaturate] = useState(false)
  const [set, setSet]= useState('')
  const handleSubmit=()=>{
    console.log(postTaskData)
    modalProps.setOpenModal(undefined);
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    setIsAuth(postTaskData)
    setFontSize(postTaskData)
    if(postTaskData.largeText) 
      setFontSize((prevSprint) => {
        return {
          ...prevSprint,
          text: 'text-3xl' 
        };
      })
    else 
      setFontSize((prevSprint) => {
        return {
          ...prevSprint,
          text: 'text-base' 
        };
      })

    

    localStorage.setItem('auth', true)
    localStorage.setItem('largeText', postTaskData.largeText)
    localStorage.setItem('monoColor', postTaskData.monoColor)
    localStorage.setItem('contrast', postTaskData.contrast)
    localStorage.setItem('sound', postTaskData.sound)
    localStorage.setItem('voice', postTaskData.voice)
    localStorage.setItem('differentColor', postTaskData.differentColor)
    localStorage.setItem('changeColor', postTaskData.changeColor)
    localStorage.setItem('offImg', postTaskData.offImg)
    localStorage.setItem('button', postTaskData.button)
    localStorage.setItem('link', postTaskData.link)
    localStorage.setItem('saturate', postTaskData.saturate)

  }
  return (
    <div  className="z-10  flex flex-col items-center  md:flex-row  ">
      {console.log(postTaskData)}
      <img 
        className={"object-cover w-48 h-[600px] bg-cover md:m-2 bg-a md:rounded "+ postTaskData.contrast+ ' '+ postTaskData.monoColor+ ' '+ postTaskData.differentColor+ ' '+ postTaskData.changeColor+ ' '+ postTaskData.saturate} 
        src={testPic} alt=""
      />
      <div className="flex relative ml-3 w-full flex-col text-left  justify-between leading-normal">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-3xl font-medium text-gray-900 dark:text-white">Параметры</h3>
          <Table className="w-[95%] mx-auto overflow-visible"  >     
            <Table.Body className="divide-y">

              <Table.Row className="bg-white-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block text-2xl font-medium">
                      Настройки изображения
                    </div>
                  </div> 
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100 dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Черно-белая версия" />
                    </div>
                    <Checkbox
                      onChange={(e)=>(e.target.checked? postTaskData.monoColor='grayscale': postTaskData.monoColor='grayscale-0', setSet(e.target.checked))}
                      id="accept"
                      className="mr-2"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Повышенная контрастность" />
                    </div>
                    <Checkbox
                      onChange={(e)=>setContrast(e.target.checked)}
                      id="accept"
                      className="mr-2"
                    />
                    {contrast?
                      <div className='w-max inline-block'>
                        <Radio
                          
                          id="1.25"
                          name="contrast"
                          value="contrast-50"
                          onClick={(e)=>(postTaskData.contrast=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          0.5
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="1.5"
                          name="contrast"
                          value="contrast-100"
                          onClick={(e)=>(postTaskData.contrast=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1
                        </Label>
                
                        <Radio
                          
                          id="1.75"
                          name="contrast"
                          value="contrast-150"
                          onClick={(e)=>(postTaskData.contrast=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1.5
                        </Label>
                
                        <Radio
                          
                          id="2"
                          name="contrast"
                          value="contrast-200"
                          onClick={(e)=>(postTaskData.contrast=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          2
                        </Label>
                      </div>
                    :
                        postTaskData.contrast=''
                    }  
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Изменение цвета" />
                    </div>
                    <Checkbox
                      onChange={(e)=>setChangeColor(e.target.checked)}
                      id="accept"
                      className="mr-2"
                    />
                    {changeColor?
                      <div className='w-max inline-block'>
                        <Radio
                          
                          id="1.75"
                          name="changeColor"
                          value="hue-rotate-30"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          30
                        </Label>
                
                        <Radio
                          
                          id="2"
                          name="changeColor"
                          value="hue-rotate-60"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          60
                        </Label>
                        <Radio
                          
                          id="2"
                          name="changeColor"
                          value="hue-rotate-90"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          90
                        </Label>
                        <Radio
                          
                          id="2"
                          name="changeColor"
                          value="hue-rotate-180"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          180
                        </Label>
                        <Radio
                          
                          id="1.75"
                          name="changeColor"
                          value="-hue-rotate-30"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          -30
                        </Label>
                
                        <Radio
                          
                          id="2"
                          name="changeColor"
                          value="-hue-rotate-60"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          -60
                        </Label>
                        <Radio
                          
                          id="2"
                          name="changeColor"
                          value="-hue-rotate-90"
                          onClick={(e)=>(postTaskData.changeColor=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          -90
                        </Label>
                      </div>
                    :
                      postTaskData.changeColor=''
                    } 
                  </div>
                </Table.Cell>
              </Table.Row>
        

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Повышенная яркость" />
                    </div>
                    <Checkbox
                      onChange={(e)=>setSaturate(e.target.checked)}
                      id="accept"
                      className="mr-2"
                    />
                    {saturate?
                      <div className='w-max inline-block'>
              
                        <Radio
                          id="1.25"
                          name="saturate"
                          value="saturate-50"
                          onClick={(e)=>(postTaskData.saturate=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          0.5
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="1.5"
                          name="saturate"
                          value="saturate-100"
                          onClick={(e)=>(postTaskData.saturate=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1
                        </Label>
                
                        <Radio
                          
                          id="1.75"
                          name="saturate"
                          value="saturate-150"
                          onClick={(e)=>(postTaskData.saturate=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1.5
                        </Label>
                
                        <Radio
                          
                          id="2"
                          name="saturate"
                          value="saturate-200"
                          onClick={(e)=>(postTaskData.saturate=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          2
                        </Label>
                      </div>
                      :
                      postTaskData.saturate=''
                    } 
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Подмена цветов(инверсия)" />
                    </div>
                    <Checkbox
                      onChange={(e)=>( e.target.checked? postTaskData.differentColor='invert' : postTaskData.differentColor='invert-0', setSet(e.target.checked))}
                      id="differentColors"
                      className="mr-2"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                <Table.Cell  className=" relative p-0 pt-5 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex dark:bg-gray-800 rounded-t px-1 py-3 h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block text-2xl font-medium">
                      Прочие настройки
                    </div>
                    
                  </div> 
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Отключение изображений" />
                    </div>
                    <Checkbox
                      onChange={(e)=>(postTaskData.offImg=e.target.checked)}
                      id="accept"
                      className="mr-2"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Большой текст" />
                    </div>
                    <Checkbox
                      onChange={(e)=>(e.target.checked? postTaskData.largeText='text-3xl': postTaskData.largeText='text-base')}
                      id="accept"
                      className="mr-2"
                    />
                  </div> 
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Озвучка:" />
                    </div>
                    <Checkbox
                      onChange={(e)=>(setSound(e.target.checked))}
                      id="accept"
                      className="mr-2"
                    />
                    {sound?
                      <div className='w-max inline-block'>
                        <Radio
                          defaultChecked
                          id="1"
                          name="sound"
                          value="1"
                          // onClick={(e)=>(console.log(e.target.value))}
                          onClick={(e)=>(postTaskData.sound=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1x
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="1.25"
                          name="sound"
                          value="1.25"
                          onClick={(e)=>(postTaskData.sound=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1.25x
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="1.5"
                          name="sound"
                          value="1.5"
                          onClick={(e)=>(postTaskData.sound=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1.5x
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="1.75"
                          name="sound"
                          value="1.75"
                          onClick={(e)=>(postTaskData.sound=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          1.75x
                        </Label>
                
                        <Radio
                          defaultChecked
                          id="2"
                          name="sound"
                          value="2"
                          onClick={(e)=>(postTaskData.sound=e.target.value, setSet(e.target.value))}
                        />
                        <Label htmlFor="united-state" className='mr-2'>
                          2x
                        </Label>
                      </div>
                      :
                      postTaskData.sound=''
                    } 
                  </div>
                </Table.Cell>
              </Table.Row>


              <Table.Row className="bg-white-100dark:border-gray-700 dark:bg-gray-700">
                <Table.Cell  className=" relative p-1 text-left hover:ring-blue-500 focus:ring-blue-100">
                  <div className=" flex h-[30px] items-center inline-block">
                    <div className=" w-max mr-2 inline-block block">
                      <Label htmlFor="end" className='w-max' value="Голосовой набор" />
                    </div>
                    <Checkbox
                      onChange={(e)=>(postTaskData.voice=e.target.checked)}
                      id="accept"
                      className="mr-2"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>  
            <button type="submit" className='bg-[#0075FF] mr-4 rounded-lg text-white hover:bg-blue-600'>Cохранить</button>
                            
        </form>
      </div>
    </div>  
  );
}

export default FirstLaunchForm;

