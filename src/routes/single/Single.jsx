import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logativ from "../../assets/logativ.png"
import "../single/Single.css"
import haykal from "../../assets/haykal.png"
import logoo from "../../assets/logoo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import tvtr from "../../assets/tvtr.png"
import tvtr2 from "../../assets/tvtr2.png"
import figma from "../../assets/figma.png"
const Single = () => {
  const { t, i18n } = useTranslation()
 


  const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value)
  }
  const [isDarkMode, setIsDarkMode] = useState(false)

useEffect(() => {
  const savedMode = localStorage.getItem('theme')
  if (savedMode) {
    setIsDarkMode(savedMode === 'dark')
  }
}, [])

useEffect(() => {
  document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
}, [isDarkMode])

const toggleDarkMode = () => {
  setIsDarkMode(prevMode => !prevMode)
  const savedMode = isDarkMode ? 'light' : 'dark'
}
  return (

    <div>
         <div className='flex justify-between items-center gap-[330px] p-4'>
    <div>
    <Link to={"/"}>  <img src={logativ} alt="Logo" className='w-[120px] ' /></Link>
    </div>
    <div className='relative'>
      
   
 
    </div>
    
    <div>
    
    
      <label htmlFor="language-select" className='sr-only'>Select language:</label>
      <button onClick={toggleDarkMode} className='mb-4 mx-[30px]' style={{ background: 'none', border: 'none' }}>
        <FontAwesomeIcon className='my-[-7px]' icon={isDarkMode ? faSun : faMoon} size='2x' />
      </button>
    
      <select 
        id="language-select"
        defaultValue={i18n.language} 
        onChange={changeLanguage}
        className='p-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200 transition-colors duration-150'
      >
        <option value="uz">UZ uz</option>
        <option value="ru">RU ru</option>
        <option value="en">EN en</option>
      </select>
   
    </div>
  
 </div>
      
    <div>
      <h1 className='w-[400px] h-[30px] text-[48px] font-bold ml-[600px] my-[100px]'>{t("single1")}</h1>
      <br /><br />
      <div className='flex gap-4 mb-4 w-[250px]  text-[16px] font-bold ml-[600px] my-[-100px] '>
              <img className='w-12' src={logoo} alt="Author" />
              <div>
                <strong className='text-[#EE5626]'>Husni Ramdani</strong>
               
                <p>{t("hed1")}</p>
              </div>
            
             
            </div>
            <img className='w-[660px]  my-[50px] ' src={haykal} alt="" />
            <br />
            <p className='text-[24px] w-[690px] ml-[400px]'>{t("single2")}</p>
            <br />
            <p className='text-[24px] w-[690px] ml-[400px]'>{t("single3")}</p>
            <br />
            <button  class="border-dashed border-2 border-sky-500 ... rounded-full px-4 py-2 text-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ...   ml-[1200px] my-[-200px]">Back to top</button>
     
    </div>
    <div className='flex gap-[170px] text-center justify-center items-center my-[200px]  '>
          <h2 className=''>Thanks <span className='text-[#EE5626]'> for coming!</span></h2>
          <br />
          <a href="mailto:dilshodumbarov707@gmail.com"> @dilshodumbarov707@gmail.com</a>
          <br />
          <div className='flex gap-6 bg-[white] rounded-full p-2  '>
            <a href="https://x.com/">  <img src={tvtr} alt="" /></a>
            <a href=""> <img src={tvtr2} alt="" /></a>
            <a href="https://www.figma.com/design/22BfdyLdu7I9GVbT5o5dOA/Simple-Website-Blog-Space-(GBLOG)-(Community)?node-id=0%3A1"> <img src={figma} alt="" /></a>
          </div>
        </div>
    </div>
  )
}

export default Single
