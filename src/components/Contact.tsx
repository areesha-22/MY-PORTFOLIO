import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black pt-36 pb-24'>
    
      <div className='font-extrabold text-3xl text-[#37AFE1] text-center pt-11'id='contact'>HAVE YOU ANY  QUESTION ?</div>
      <div className='text-white font-semibold text-xl text-center font-mono pt-10'>I&apos;M AT YOUR SERVICE</div>
      <div className='font-extrabold text-4xl text-[#37AFE1] text-center pt-11 '>CONTACT ME</div>
   
      <div className="w-[100%] text-center max-w-3xl m-4 lg:mb-12 items-center justify-center lg:ml-72 pt-11 "
    >
           <input type="text" placeholder='YOUR NAME'
            className='w-[100%]   mb-12 rounded-md p-4 shadow-custom'/>
          
        
           <input type="Email" placeholder='YOUR E-MAIL'
            className='w-[100%]   mb-12 shadow-custom rounded-md p-4'/>
          
          
           <input type="number" placeholder='YOUR NUMBER'
            className='w-[100%]   mb-12 shadow-custom rounded-md p-4  '/>
           
          
           
           <textarea  cols={30} rows={10} placeholder='YOUR ADDRESS'
            className='w-[100%]    rounded-md p-4 shadow-custom'></textarea>
           
             
            </div>
            <div className='btn-box lg:ml-[600px]'>
            <a href='/' className='btn mb-20'>SEND MESSAGE</a> 
    </div></div>
  )
}

export default Contact
