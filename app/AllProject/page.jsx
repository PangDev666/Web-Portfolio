'use client'
import React from 'react'
import NavbarForNextPage from '../components/NavbarForNextPage'
import AllProject from '../components/project/AllProject'
import Footer from '../components/Footer';

const allProjects = () => {


  return (
    <div>
        <NavbarForNextPage />
        <div className="h-[100px]"></div>
        <AllProject />
        <div className='h-[100px]'></div>
        <Footer />
    </div>
  )
}

export default allProjects