import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container4 = () => {
  return (
    <div className='max-w-screen-2xl  max-h-screen top-auto bg-white pt-36 pb-36  '>
     
      <div className="flex-1">
            <div  className="h-screen flex justify-center  pl-8 items-center ">
          <Image 
            src="/image4.svg"
            alt="Banner Image" 
            width={670}
            height={499}
          /> 
           <div className="flex h-[465px] w-11/12">
            <div className="flex flex-col flex-1 gap-4 justify-center px-4">
            <h1 className='max-w-2xl h-44 font-Inter font-bold text-7xl'> Customise it to your needs</h1>
            <div>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={500}
            height={200}
          /></div>
           <p className='font-inter leading-7 font-normal text-lg'>Customise the app with plugins&lsquo; custom themes and multiple text editors (Rich  Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
<div className='gap-3 pt-5 pb-5'>
<button className='w-44 h-16 bg-[#4F9CF9] font-medium text-lg text-white  rounded-lg items-center justify-center gap-2 flex'>Let&apos;s Go <FaArrowRight /></button></div>
         
          </div></div>
           
           
           
           </div> </div>
   
   
   
   
    </div>
  )
}

export default Container4
