import React, { useEffect } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi';
import { Link ,useNavigate } from 'react-router-dom'


function Footer() {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <div className=' py-10 flex items-center justify-center space-x-8' >
          <div class=" w-40 h-40 bg-black bg-opacity-50 rounded-full flex justify-center items-center hover:ring-2 ">
             <HiArrowNarrowUp className=' text-5xl' />
          </div>
                   
        </div>
        <div className=' pb-4 '>
        <div className='bg-black  rounded-xl bg-opacity-50 max-sm:mx-1 md:mx-5 lg:mx-28 h-16 px-5 flex items-center justify-between max-sm:grid font-thin max-sm:mb-10 ' >
              <Link target="_blank" className='text-white text-xl font-light duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain '>GITHUB</Link>
              <Link target="_blank" className='text-white text-xl font-light duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain '>LINKEDIN</Link>
              <Link target="_blank" className='text-white text-xl font-light duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain '>INSTAGRAM</Link>
              <Link target="_blank" className='text-white text-lg font-extralight duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain '>heavensanime@gmail.com</Link>
        </div>
        </div>
      </div>

    </>
    

  )
}

export default Footer