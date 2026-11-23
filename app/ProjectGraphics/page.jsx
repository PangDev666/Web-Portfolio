'use client'
import React from 'react'
import NavbarForNextPage from '../components/NavbarForNextPage'
import Graphics from '../components/project/Graphics'
import Footer from '../components/Footer';

const ItSupportProject = () => {

  return (
    <div>
        <NavbarForNextPage/>
        <div className="h-[100px]"></div>
        <Graphics/>
                <div className='h-[100px]'></div>
        <Footer/>
    </div>
  )
}

export default ItSupportProject