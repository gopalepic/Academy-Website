import React from 'react'
import Header from '../Components/Header'
import Vision from '../Components/Vision'
import Admission from '../Components/Admission'
import Navigations from '../Components/Navigations'
import Notice from '../Components/Notice'
import Footer from '../Components/Footer'
import SlidingImages from '../Components/SlidingImages'
const Homepage = () => {


  return (
    <div className='bg-[#e2e9f1] w-screen  h-full'>
      
      <div> <Header/> </div>
      <div> <SlidingImages/></div>
      <div><Vision/></div>
      <div><Admission/></div>
      <div><Navigations/></div>
      <div><Notice/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Homepage
