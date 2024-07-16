import { useEffect, useState } from "react";
import React from 'react'

const Notice = () => {

    const [showNotice , setShowNotice] = useState(false);
    const [data , setData] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const ClickNotice = async() => {
        setShowNotice(!showNotice);
        setIsLoading(true);
        try{
          const response = await fetch('http://localhost:3000/');
          const data = await response.json();
          setData(data.data);
        }
        catch(error){
          console.error(error);
        }
        finally{
          setIsLoading(false);
        }
    }

    
  return (
    <div className='text-center flex flex-col items-center'>
   <button onClick={ClickNotice} className=' px-4 py-2 text-base font-medium rounded-md  bg-red-700 text-white animate-pulse'>NOTICE</button>
      {showNotice && (
      <div className='border border-black bg-[#dcdcdd] w-4/5 sm:w-3/5 md:w-2/5 '>
     {/* <ul > */}
        {/* <li>S. No. ,Date,,Notice</li>
        <li>1,2/8/2024,,"Dear students,</li>
        <li>Please be informed that the school timing has been changed from tomorrow, 9th February, 2024 (Friday). The new school timing will be from 8:30am to 1:35 pm.
            Note:- Dear students, if your mode of transport is school bus you are asked to get on your bus stops an hour (60 minutes) earlier than your usual timing.
        </li>
        <li>2,2/13/2024,,"Dear students,
         This is to inform you that our school will remain closed tomorrow on the occassion of 'Basant Panchami' and will re-open on Thursday,15th February,2024 as usual timing.
        </li>
        <li>,2/22/2024,,"Owing to heavy traffic on account of the PM's advent to the city Varanasi, the School remains closed tomorrow on Friday, the 23rd February 2024 and the School remains closed on Saturday, the 24th February 2024 on the auspicious occasion of Shri Guru Ravidas Jayanti. The School will re-open on Monday, the 26th February 2024 as usual.
         Note: Fees counter will remain open on Saturday (24/2/24) from 9:00 am to 12:00 pm.
         Students form Nursery to class IX and XI please collect your admit card after clearing dues.
        </li> */}
        
     {/* </ul> */}
        {isLoading? (
          <p>Loading...</p>
        ) :(
          <p>{data}</p>
        )}
      </div>
      )}
    </div>
  )
}

export default Notice
