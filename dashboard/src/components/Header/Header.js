import React, { useState } from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import { BsBrightnessHigh } from 'react-icons/bs'
import { MdOutlineDarkMode } from 'react-icons/md'
import Switch from './Switch/Switch'


import './Header.css'

export default function Header({onClick, isDark}) {
    

    

  return (
    <div className={`header ${isDark ? 'header-dark' : 'header-light'}`}>
        <div className="admin-profile">
            <img src="/img/1.jpg" alt="Admin Profile" />
            <div>
                <h1> سروش طهرانی  </h1>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

        <div className='header-left-section'>
            <div className="search-box">
                <input type="text" placeholder='جست و جو بکنید ...'  />
                <button>جست و جو</button>
            </div>

            <button className='header-left-icon'>
                <AiOutlineBell />
            </button>
            <Switch onClick={onClick}/>
        </div>
    </div>
  )
}
