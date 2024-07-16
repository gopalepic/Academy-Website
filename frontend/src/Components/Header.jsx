import React, { useState } from 'react'
import Logo from '../assets/Logo.jpg'
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const hover = `hover:bg-[#5e769b] hover:p-1 rounded-md `
    const [showitems , setShowItems] = useState(false);
    
    const Items = () => {
      setShowItems(!showitems)
    }
  return (
    <div className='flex items-center justify-between p-1'>
         <div className='w-full '> <img src={Logo} alt="logo"  />  </div>
         <div className='mr-[5%] '> 
           <div className='hidden lg:block'>
            <ul className='flex gap-12 font-semibold '>
                 <button className={hover}>Home</button>
                 <button className={hover}>Admission</button> 
                 <button className={hover}>TC</button>
                 <button className={hover}>Gallery</button>
                 <button className={hover}>Mandatory Disclosure</button>
                 <button className={hover}>About us</button>
                 <button className={hover}>Contact</button>
             </ul>
              </div>
              <div className='block lg:hidden'>
                <IoMenu onClick={Items} className='text-2xl'/>
                { showitems && 
                <div>
                <ul className='bg-[#0f172a] text-gray-300 flex flex-col gap-3 font-semibold absolute z-10 top-20 right-0 w-1/5'>
                 <button className={hover}>Home</button>
                 <button className={hover}>Admission</button> 
                 <button className={hover}>TC</button>
                 <button className={hover}>Gallery</button>
                 <button className={hover}>Mandatory Disclosure</button>
                 <button className={hover}>About us</button>
                 <button className={hover}>Contact</button>
             </ul>
                </div>
                }
              </div>
             
         </div>
    </div>
  )
}

export default Header
