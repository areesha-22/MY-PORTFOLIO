import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container3 = () => {
  return (
   // pl-56 pr-56 dainay say image q small horahi hai
   <div className='bg-[#043873] w-[1921px]  h-[759px] justify-center items-center  pt-36 pb-36'>
    <div className='flex  '>
     <div className= "pl-20 pr-10 gap-4 justify-center ">
    
      <h1 className='font-Inter font-bold text-white text-7xl'> Use as Extension</h1>
      <div>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={500}
            height={200}
          /></div>
    <p className='font-Inter font-normal text-white text-lg pt-6 leading-7'>Use the web clipper extension&lsquo; available on Chrome and Firefox&lsquo; to save web pages <br></br> or take screenshots as notes.
</p>
<div className='pt-12 pb-5  gap-3'>
<button className='text-white bg-[#4F9CF9] font-Inter font-medium text-lg leading-6 rounded-md w-44 h-16 items-center justify-center gap-2 flex'>Let&apos;s Go <FaArrowRight /></button></div>
</div>

<div className="flex-1">
            <div>
          <Image 
            src="/image3.svg"
            alt="Banner Image" 
            width={686}
            height={479}
          /> 
           </div>
             
            </div></div>
   
   
    </div>
  )
}

export default Container3

