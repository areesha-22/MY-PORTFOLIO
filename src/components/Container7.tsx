import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'
const Container7 = () => {
  return (
    <div className='top-[5926] pt-36 pb-36 pl-20 '>
        <div className='flex justify-center items-center'>
        <div>
<h1 className='font-Inter font-bold justify-center text-7xl'>100% your data</h1>
<div className='pl-52'>
          <Image 
            src="/yellow.png"
            alt="Banner Image" 
            width={400}
            height={100}
          /> 
           </div>
             
<p className='font-Inter font-normal text-lg pt-9 leading-7'>The app is open source and your notes are saved to an open format, so you'll always <br></br> have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
        <div className='pt-12 pb-5 '>
            <button className='w-48 h-16 rounded-lg bg-[#4F9CF9]  font-medium text-lg text-white leading-6 items-center justify-center gap-2 flex  '>Read More <FaArrowRight /></button> </div>
       
        </div>
        <div>
            <div>
          <Image 
            src="/image7.svg"
            alt="Banner Image" 
            width={759}
            height={401}
          /> 
           </div>
             
            </div></div>
      
    </div>
  )
}

export default Container7
