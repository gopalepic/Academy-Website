import React from 'react'
import { useState } from 'react'
import image from '../assets/image.avif'
import image2 from '../assets/child2.avif'
import image3 from '../assets/child3.avif'
import image4 from '../assets/child4.avif'
import image5 from '../assets/image5.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const SlidingImages = () => {

    const slides = [
        {
          url: image,
        },
        {
          url: image5,
        },
        {
          url: image3,
        },
    
        {
          url: image4,
        },
        {
          url: image2,
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
    ></div>
    <div className='top-[50%]  absolute text-center left-[10%]'>
        <h1 className='text-3xl font-semibold'>Our team of dedicated , skilled and professional teachers</h1>
        <p className=''>Besides preparing students for academic achievement, we aim at empowering them with knowledge, attitudes, values and skills to face the realities of life.</p>
    </div>
    
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  )
}

export default SlidingImages
