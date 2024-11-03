import React from 'react'
import Image from 'next/image'
const Container8 = () => {
  return (
    <div>
      <div>
        <h1 className='font-Inter pl-96 ml-16 font-bold text-7xl '>Our sponsors</h1>
        <div className='pl-96 ml-48'>
          <Image 
            src="/yellow.png"
            alt="Banner Image" 
            width={400}
            height={200}
          /> 
           </div>
       </div>
<div className='flex space-x-36 pl-8 pt-36 '>
        <div>
          <Image 
            src="/Apple.svg"
            alt="apple Image" 
            width={56}
            height={69}
          /> </div>
       <div>
          <Image 
            src="/Microsoft.svg"
            alt="microsoft Image" 
            width={288}
            height={63}
          /> </div>

        <div>
          <Image 
            src="/Slack.svg"
            alt="slack Image" 
            width={281}
            height={72}
          /> </div>

       <div>
          <Image 
            src="/Google.svg"
            alt="google Image" 
            width={211}
            height={70}
          /> </div>




</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Container8
