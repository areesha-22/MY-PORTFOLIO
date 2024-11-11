import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-black sm:pt-96 '>
                   
                 

              <div className='font-sans font-extrabold text-center text-white text-6xl 'data-aos="fade-left" id='about'>ABOUT ME</div>
              <div className='relative left-96 ml-36   '>
                <Image src="/areesha.png"
                height={400}
                width={400} 
                alt="my image"/> 
              </div>
 <div className='text-white text-center  p-8 font-medium'> My name is Areesha Abdul Rahim .I have done intermediate from ARMY PUBLIC SCHOOL AND COLLAGE SYSTEM(APS SRC)
 I am doing bechlor in mathematics from sindh university jamshoro.I am Pursuing Certified Cloud applied Gen AI&lsquo;  metaverse and web 3.0 
 Student at Governor House initiatives. I  am Currently learning Python I  am highly motivated and deatail-oriented web developer .I speacialize in crafting responsive&lsquo; 
  user-friendly&lsquo; and visually stunning websites and applications.Proficient in HTML &lsquo; CSS &lsquo;  Tailwind-CSS&lsquo; JAVASCRIPT&lsquo; TYPESCRIPT
  &lsquo; REACT AND NEXT.JS.Passionate about staying up-to-date with the latest industry trends and best practices.                                                                                                                   
    I thrive in collaborative environments and enjoy taking new challanges  that push me to learn and grow as a developer.
    With a focus on deliverind a clean &lsquo; efficient and well-organized documented code &lsquo; I am committed to helping bussiness and indiviual achieve their
    digital goals.When  i am not coding you can find me exploring new technologies and staying up-to-date with the latest trend in the industry.</div>  
       <div className=' btn-box text-center items-center justify-center lg:ml-[1000px] mt-7 sm:right-80 sm:relative' >
        <a href='' className='btn' >DOWNLOAD RESUME</a>
       </div>
       
        </div>
      
  )
}

export default About
