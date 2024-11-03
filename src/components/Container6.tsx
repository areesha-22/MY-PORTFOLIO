import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
const Container6 = () => {
  return (
    <div className='w-[1921px] h-[574px]  '>
      <div className='w-full absolute opacity-30 '>
   
   <Image 
     src="/Element.svg"
     alt="Banner Image" 
     width={1920} height={548}
   /> 
    
</div>
        <div className=' mt-96 pl-56 pr-56 pb-40 bg-[#043873]'>
      
            <div className='justify-center items-center  pt-48'>
        <h1 className='font-Inter  font-bold text-7xl  text-[#FFFFFF]'>
Your work, everywhere you are
</h1>
<p className='font-Inter font-normal text-lg leading-7   pt-10 items-center text-[#FFFFFF]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and<br></br> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
      <div className=' pt-14 pb-5 pl-96 '>
        <button className='w-48 h-16 rounded-lg bg-[#4F9CF9] font-medium text-lg font-Inter text-[#FFFFFF] items-center justify-center gap-2 flex '>Try Taskey <FaArrowRight /></button>
      </div>
        </div></div>
      
    </div>
  )
}

export default Container6
