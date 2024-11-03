import React from 'react'
import Image from 'next/image'
const Container10 = () => {
  return (
    <div className='pt-40 pb-40'>
      <h1 className='font-Inter font-bold text-7xl text-center'>What Our Clients Says</h1>
      <div className='pl-96 ml-48'>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={400}
            height={200}
          /></div>
          <div className='flex pt-14'>
   <div className='pl-6' >
          <Image 
            src="/Client.svg"
            alt="Banner Image" 
            width={535}
            height={599}
          /></div>
          <div className='pt-9 flex space-x-6' >
          <div className='pr-5'>
          <Image 
            src="/client2.svg"
            alt="Banner Image" 
            width={438}
            height={499}
          /></div>
          <div>
          <Image 
            src="/client3.svg"
            alt="Banner Image" 
            width={438}
            height={499}
          /></div></div>
   
   
   
   
   
   </div>
   <div className='pl-96 ml-72 pb-36' >
          <Image 
            src="/Slider.svg"
            alt="Banner Image" 
            width={60}
            height={30}
          /></div>
   
    </div>
  )
}

export default  Container10
