import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container9 = () => {
  return (
    <div className='pt-44'>
    <div className='  bg-[#043873]'>
      <div  className='flex pt-44 pb-44 items-center justify-center space-x-9 '>
      <div>
          <Image 
            src="/Apps.svg"
            alt="apple Image" 
            width={582}
            height={472}
          /> </div>

          <div>
            <h1 className='font-Inter font-bold text-7xl text-white space-y-8 '>Work with Your <br></br> Favorite Apps Using<br></br> whitepace</h1>
         <p className='font-Inter font-normal text-lg text-white pt-10'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with <br></br>Zapier to have all the tools you need for your project success.</p>
<div className='pt-14'>
    <button className='w-48 h-16 rounded-lg bg-[#4F9CF9] text-white font-medium text-lg items-center justify-center gap-2 flex'>Read more <FaArrowRight /></button>
</div>
</div>
      </div>
    </div></div>
  )
}

export default Container9
