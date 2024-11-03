import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container2 = () => {
  return (
  
      <div>
        <div className='w-full absolute  pt-28 '>
   
   <Image 
     src="/BACKGROUND.svg"
     alt="Banner Image" 
     width={441} height={449}
   /> 
    
</div>
        <div className="h-screen flex  justify-center items-center">
          <div className="flex h-[465px] w-11/12">
            <div className="flex pl-10 pr-10 flex-col flex-1 gap-4 justify-center px-4">
            <h1 className="font-bold text-7xl  text-Inter">Project<br></br>Management</h1>
            <div>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={600}
            height={200}
          /></div>
            <p className="font-Inter text-lg font-normal leading-7 ">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <div className='pt-5 pb-5  gap-2'>
            <button className="text-white w-48 h-16 rounded-md  p-4 bg-[#4F9CF9] items-center justify-center gap-2 flex">GET STARTED <FaArrowRight /></button></div>
            </div>
            <div className="flex-1">
            <div>
          <Image 
            src="/image2.svg"
            alt="Banner Image" 
            width={748}
            height={465}
          /> 
           </div>
             
            </div>
          </div>
        
        </div>
        {/* container2 */}
         <div className="h-screen flex justify-center items-center pl-16">
         <Image 
            src="/ball.png"
            alt="ball Image" 
            width={710}
            height={661}
            
          /> 

<div className="flex h-[465px] w-11/12 ">
            <div className="flex pl-10 pr-10 flex-col flex-1  justify-center px-4">
            <h1 className='max-w-2xl h-20 font-Inter font-bold text-7xl'> Work togather</h1>
            <div className='pl-48'>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={400}
            height={200}
          /></div>
           <p className='font-inter font-normal pt-6 text-lg'>With whitepace, share your notes with your colleagues and collaborate on them.<br></br>
You can also publish a note to the internet and share the URL with others.
</p>
<div className='gap-3 pt-10 pb-5'>
<button className='w-48 h-16 bg-[#4F9CF9] font-medium text-lg text-white rounded-md items-center justify-center gap-2 flex'>Try It Now <FaArrowRight /></button></div>
         
          </div>
         </div></div>
         </div>
      );
    }
        
    
 


export default Container2
