import React from 'react'
import Image from '../assets/Admission.png'
import Image2 from '../assets/Ad2.jpg'
const Admission = () => {
  return (
    <div className='flex justify-between px-[2%]'>
      <div className=' w-full lg:bloack lg:w-3/5 lg:flex lg:flex-col lg:gap-9'>
        <h1 className='text-center text-4xl font-medium '>Admission Process</h1>
        <p className='text-[#536071] tracking-wide'> <b>Welcome to Harihar Singh Academy</b>, where we take pride in fostering a dynamic learning environment that empowers students to excel academically, socially, and personally. Our school is committed to providing a holistic education that goes beyond the confines of textbooks, encouraging students to explore their interests and talents. We boast a team of dedicated and qualified educators who are passionate about nurturing the potential within each student. At Harihar Singh Academy, we have consistently achieved remarkable results, with our students excelling in academic pursuits, sports, and various co-curricular activities. Our state-of-the-art facilities include well-equipped classrooms, modern laboratories, a well-stocked library, and expansive sports grounds. We believe in leveraging technology to enhance the learning experience, with smart classrooms and computer labs ensuring a contemporary approach to education. Additionally, our commitment to character development is reflected in various leadership and personality development programs. Join us at Harihar Singh Academy and embark on a journey of academic excellence, personal growth, and a vibrant school community that prepares students for a successful future.</p>
      </div>
      <div className='hidden lg:w-2/5 lg:flex lg:justify-center'>
        <img src={Image} className='z-0 h-[300px] ' />
        <img src={Image2} alt="" className='z-1 -ml-10 -mt-16' />
      </div>
    </div>
  )
}


export default Admission
