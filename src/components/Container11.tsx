import React from 'react'
import Image from 'next/image'
import { VscGlobe } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Container11 = () => {
  return (
    <div className='w-[1440px] h-[709px] bg-[#043873] pt-28 pb-28  '>
      <div>
        <h1 className='font-bold font-Inter text-7xl text-center text-white'>Try Whitepace<br></br> today</h1>
      <p className='font-normal font-Inter text-2xl text-white pt-10 text-center'>Get started for free.<br></br>Add your whole team as your needs grow.</p>
      <div className=' pt-11 items-center justify-center pl-96 ml-52'>
        <button className='w-60 h-16 rounded-xl bg-[#4F9CF9] font-medium text-white font-Monstserrat text-lg  items-center justify-center gap-2 flex '>Try Taskey free <FaArrowRight /></button>
      </div>
      <p className='text-white font-Inter font-normal text-2xl text-center pt-14'>On a big team? Contact sales</p>
      <div className='flex items-center justify-center pt-11 space-x-9'>
      <div>
          <Image 
            src="/logo2.svg"
            alt="appelImage" 
            width={60}
            height={61}
          /></div>
          <div>
          <Image 
            src="/Group.svg"
            alt="windowImage" 
            width={60}
            height={60}
          /></div>
          <div>
          <Image 
            src="/logo3.svg"
            alt="andriodImage" 
            width={60}
            height={61}
          /></div></div>
      </div>

      
      {/* container2 */}
      
      <div className='w-[1440px] h-[474px] space-x-28 flex  pt-36  bg-[#043873]'>
      <div >
      <div className='pl-9'>
          <Image 
            src="/logo1.svg"
            alt="appelImage" 
            width={144}
            height={34}
          /></div>
<p className='text-Inter  text-white font-normal text-lg pl-9 pt-8'>whitepace was created for <br></br>the new ways we live and <br></br>work. We make a better <br></br>workspace around the world</p></div>
   <div>
    <ul className='list-none space-y-4'>
    <li className='font-bold font-Inter text-white text-lg'>Product</li>
    <li className='font-normal text-base text-white'>Overview</li>
    <li className='font-normal text-base text-white '>Pricing</li>
    <li className='font-normal text-base text-white'>Customer services</li>
    </ul> </div> 
    <div>
    <ul className='list-none space-y-4'>
    <li className='font-bold font-Inter text-white text-lg'>Resources</li>
    <li className='font-normal text-base text-white'>Blog</li>
    <li className='font-normal text-base text-white '>Guides & tutorials</li>
    <li className='font-normal text-base text-white'>Help center</li>
    </ul> </div>
    <div>
    <ul className='list-none space-y-4'>
    <li className='font-bold font-Inter text-white text-lg'> Company</li>
    <li className='font-normal text-base text-white'>About us</li>
    <li className='font-normal text-base text-white '> Careers</li>
    <li className='font-normal text-base text-white'>Media Kit</li>
    </ul> </div> 
     <div>
        <h5 className='font-bold text-2xl font-Inter text-white'>Try It Today</h5>
     <p className='font-Inter font-normal pt-10 text-base text-white'>Get started for free.Add your<br></br> whole team as your needs grow.</p>
     
     <div className='pt-5'>
     <button className='w-48 h-14 rounded-lg bg-[#4F9CF9] text-white flex items-center justify-center gap-2'>Start Today <FaArrowRight /></button></div>
     
     </div>
     
  </div>
  <hr></hr>
    
    <div className='bg-[#043873] pl-44 flex space-x-16 pt-8 pb-10 text-white'>
   <p className='font-normal text-base flex' ><VscGlobe />English</p>
  
  <p className='font-normal text-base'>Terms & privacy</p>
  <p className='font-normal text-base'>Security</p>
  <p className='font-normal text-base'>Status</p>
  <p className='font-normal text-base'>©2021 Whitepace LLC.</p>
  
  <FaFacebookF /> <FaLinkedinIn /> <FaTwitter />
   </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Container11
