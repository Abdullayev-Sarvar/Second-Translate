import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import logoo from "../../assets/logoo.png"
import haykal from "../../assets/haykal.png"
import imgs from "../../assets/imgs2.png"
import soat from  "../../assets/soat.png"
import tvtr from "../../assets/tvtr.png"
import tvtr2 from "../../assets/tvtr2.png"
import figma from "../../assets/figma.png"
import "../header/Header.css"
const Header = () => {
  const { t } = useTranslation()
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
  }
  return (
    <>
    <div className='mx-auto px-4 py-[50px]'>
   
      
       <Link to={"/single"}>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='flex flex-col'>
            <h1 className='text-[30px] font-bold  mb-4 w-[300px]'>{t("hed2")}</h1>
            <p className='text-base mb-4 w-[280px] text-[16px]'>{t("hed3")}</p><br />
            <div className='flex gap-4 mb-4 w-[250px] ml-[-12px] '>
              <img className='w-12' src={logoo} alt="Author" />
              <div>
                <strong>Husni Ramdani</strong>
                <p>{t("hed1")}</p>
              </div>
            </div>
            <hr className='bg-black mb-4 w-[250px]  ' />
            <h1 className='text-[30px] font-bold  mb-4 w-[320px] '>{t("hed2")}...</h1>
            <p className='text-base mb-4 w-[250px]'>{t("hed3")}...</p>
            <hr className='bg-black mb-4 w-[250px]' />
          </div>
          
          <div className='flex flex-col mb-4 my-4   '>
         <img className='w-[340px]' src={haykal} alt="" />
         <br />
            <h1 className='text-[30px] w-[320px] font-bold mb-4 ml-[20px]'>{t("hed2")}...</h1>
            <p className='text-lg mb-4 ml-[20px]  w-[320px]'>{t("hed3")}...</p>
            <div className='flex items-center gap-4 mb-4 ml-[20px]'>
              <img className='w-12' src={logoo} alt="Author" />
              <div>
                <strong>Husni Ramdani</strong>
                <p>{t("hed1")}</p>
              </div>
            </div>
            <hr className='bg-black mb-4 w-[250px]' />
          </div>

          <div className='flex flex-col my-4'>
            <img className='w-64 mb-4' src={imgs} alt="Image" />
            <h1 className='text-[20px] font-bold  mb-4 w-[280px] ml-[15px]'>{t("hed2")}...</h1>
            <p className='text-base mb- w-[250px] ml-[15px]'>By <span className='text-orange-600'>Husni Ramdani</span></p>
            <hr className='bg-black mb-4 my-4 w-[250px] ' />
            <img className='w-64 mb-4' src={soat} alt="Image" />
            <h1 className='text-[20px] font-bold  mb-4 ml-[15px] w-[290px]'>{t("hed2")}...</h1>
            <p className='text-base mb-4 w-[250px] ml-[15px]'>{t("hed3")}...</p>
            <p className='text-base mb-4 ml-[15px]'>By <span className='text-orange-600'>Husni Ramdani</span></p>
            <hr className='bg-black w-[250px]' />
          </div>

          <div className='flex flex-col'>
            <h1 className='text-[28px] w-[300px] font-bold  mb-4'>{t("hed2")}...</h1>
            <p className='text-base mb-4'>{t("hed3")}...</p>
            <div className='flex  gap-4 mb-4 ml-[2px]'>
              <img className='w-12' src={logoo} alt="Author" />
              <div>
                <strong>Husni Ramdani</strong>
                <p>{t("hed1")}</p>
              </div>
            </div>
            <hr className='bg-black mb-4 w-[250px]' />
            <h1 className='text-[28px] w-[300px] font-bold mb-4'>{t("hed2")}...</h1>
            <p className='text-base mb-4'>{t("hed3")}...</p>
            <div className='flex ml-[2px] gap-4 mb-4'>
              <img className='w-12' src={logoo} alt="Author" />
              <div>
                <strong>Husni Ramdani</strong>
                <p>{t("hed1")}</p>
              </div>
            </div>
            <hr className='bg-black w-[250px]' />
          </div>
        </div>
        <br /><br />  <br />
        <div className='flex gap-[170px] text-center justify-center items-center  '>
          <h2 className=''>Thanks <span className='text-[#EE5626]'> for coming!</span></h2>
          <br />
          <NavLink href="mailto:dilshodumbarov707@gmail.com">https://github.com/Abdullayev-Sarvar</NavLink>
          <br />
          <div className='flex gap-6 bg-[white] rounded-full p-2  '>
            <NavLink href="https://x.com/">  <img src={tvtr} alt="" /></NavLink>
            <NavLink href=""> <img src={tvtr2} alt="" /></NavLink>
            <NavLink href="https://www.figma.com/design/22BfdyLdu7I9GVbT5o5dOA/Simple-Website-Blog-Space-(GBLOG)-(Community)?node-id=0%3A1"> <img src={figma} alt="" /></NavLink>
          </div>
        </div>
       </Link>
      </div>
  
    </>
  )
}

export default Header
