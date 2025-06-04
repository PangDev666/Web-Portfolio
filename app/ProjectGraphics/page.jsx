'use client'
import React from 'react'
import NavbarForNextPage from '../components/NavbarForNextPage'
import Graphics from '../components/project/Graphics'
import { useEffect, useState } from "react";
import Footer from '../components/Footer';

const ItSupportProject = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          setIsDarkMode(true);
        }else{
          setIsDarkMode(false);
        }
      },[]);
    
      useEffect(() => {
        if(isDarkMode){
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
        }else{
          document.documentElement.classList.remove('dark');
          localStorage.theme = '';
        }
      },[isDarkMode]);

  return (
    <div>
        <NavbarForNextPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className="h-[100px]"></div>
        <Graphics isDarkMode={isDarkMode}/>
                <div className='h-[100px]'></div>
        <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default ItSupportProject