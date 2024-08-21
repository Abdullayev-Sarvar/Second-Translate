import React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logativ from "../../assets/logativ.png"
import { Link } from 'react-router-dom'

const Nav = () => {
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
  }
  return (
    <div className='flex justify-between items-center gap-[330px] p-4'>
    <div>
    <Link to={"/"}>  <img src={logativ} alt="Logo" className='w-[120px] ' /></Link>
    </div>
    <div className='relative'>
      <h1 className='w-[300px] h-[30px] text-[24px] font-bold text-center  relative z-10'>
        {t("nav1")}
      </h1>
     
      <hr className='w-[300px] h-[2px] bg-black absolute bottom-[-4px] left-0' />
   
 
    </div>
    
    <div>
    
    
      <label htmlFor="language-select" className='sr-only'>Select language:</label>
      <button onClick={toggleDarkMode} className='mx-[30px] text-xl p-4 bg-slate-500' style={{ background: 'none', border: 'none' }}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    
      <select 
        id="language-select"
        defaultValue={i18n.language} 
        onChange={changeLanguage}
        className='p-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-200 transition-colors duration-150'
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
   
    </div>
  
 </div>
 
  )
}

export default Nav
