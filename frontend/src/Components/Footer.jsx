import React from 'react'
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#1f2937] text-white p-[3%] flex flex-col gap-4'>
    <div className='flex flex-col justify-between gap-7 sm:flex-row sm:justify-between '>
      <div className=''>
        <h1 className='text-2xl py-2'>Contact</h1>
           <div className='flex items-center gap-2'>
            <MdMail/> Email : hsacademy@rediffmail.com
           </div>
           <div className='flex items-center gap-2'>
            <FaPhoneAlt/> Phone : 9119823653  7703004336
           </div>
      </div>
      <div>
        <h1 className='text-2xl py-2'>Location</h1>
           <div className='flex  sm:flex sm:items-center'>
            <MdLocationOn className='mt-1 sm:block md:-mt-5 lg:mt-1'/> Harihar Singh Academy , Tisaura , Chlapur , Varanasi
           </div>
           
      </div>
      <div>
        <ul className='flex flex-col gap-2'>
            <li>Terms & Conditions</li>
            <li>Cancellation and Refund</li>
            <li>Shipping and Delivery</li>
        </ul>
      </div>
    </div>
    <h1>Harihar Singh Academy 2024, All Rights Reserved</h1>
    </div>
  )
}

export default Footer
