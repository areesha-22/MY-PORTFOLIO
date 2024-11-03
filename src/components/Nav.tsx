import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
     <div className=" bg-[#043873]  w-[1440px] h-[92px] ">
<div className='flex gap-10 items-center justify-center'>
  <div  className='w-48 h-8 ml-20'>
  <Image src="/logo1.svg" 
  alt="logo image"
   width={326} 
   height={59}/></div>
       <ul className='list-none gap-10 flex  text-white font-bold'>
        <li>Products </li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
       </ul>
       <div>
        <button className='min-w-32 h-14 pt-4 pb-4 pr-10 pl-10 text-blue-600 bg-[#FFE492] rounded-lg text-lg font-medium font-Inter '>Login</button>
       </div>
       <div  className='pt-5'>
        <button className='w-56 h-16 rounded-lg font-Inter font-medium text-lg text-white bg-[#4F9CF9] items-center justify-center gap-2 flex'>Try Whitepace free <FaArrowRight /></button>
       </div>
    
       </div>
      
      </div>

    </div>
  )
}

export default Navbar
