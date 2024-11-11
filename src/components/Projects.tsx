import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";
 export default function Projects (){
  return(
    <div  className='bg-black '>
      <div className='text-center text-white text-lg font-mono'>WHAT I WILL DO FOR YOU?</div>
      <div className='text-[#37AFE1] text-center font-extrabold text-4xl pt-12 pb-14' id='project'>LATEST PROJECTS</div>
   
<div className="portfolio-gallery" data-aos="zoom-out-right">
  <div className="port-box">
    
      <Image src="/Capture.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>PORTFOLIO TEMPLATE</h3>
        <p className="font-semibold text-black" >This is the company portfolio template .which is based on pure HTML and CSS.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://portfolio-template-xi-sage.vercel.app/"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box mix">
    
      <Image src="/cv.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>  STATIC RESUME</h3>
        <p className="font-semibold text-black">A static web application showcasing my projects and technical expertise&lsquo; built using HTML&lsquo;  CSS&lsquo;  and TypeScript. This responsive and visually appealing resume highlights my skills and experience in web development</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://mile-stone1-theta.vercel.app/"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box mix">
    
      <Image src="/resume.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>RESUME BUILDER</h3>
        <p className="font-semibold text-black">You can start building your resume in less than 5 seconds&lsquo; using predefined sections.You can also customize it to your own needs and personality and hit Download.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://hackaton-resume-buider-r4bd.vercel.app/"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box">
    
      <Image src="/figma.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>FIGMA TEMPLATE</h3>
        <p className="font-semibold text-black">This is the figma template with pixel perfect.It is based on next.js</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://figma-template-7ixb.vercel.app/"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box">
    
      <Image src="/portfolio.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>PORTFOLIO</h3>
        <p className="font-semibold text-black"> This is my portfolio.which is based on HTML and CSS.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://html-css-portfolio-beta.vercel.app/"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box ">
    
      <Image src="/atm.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>ATM MACHINE</h3>
        <p className="font-semibold text-black">I created ATM MACHINE by using typescript.It perform 4 task. 🚀 
check balance &lsquo;withdraw&lsquo;transfer and fast cash.All this by using nodejs&lsquo; typescript and inquirer.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://github.com/areesha-22/ATM-MACHINE"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box ">
    
      <Image src="/game.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'> NUMBER GUESSING</h3>
        <p className="font-semibold text-black">I&apos;ve created a dynamic number guessing game using TypeScript. Players are tasked with guessing a number within a defined range, receiving instant feedback on their attempts.
Feel free to contribute,add features or customize the game.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://github.com/areesha-22/number-guessing-game"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box ">
    
      <Image src="/calculator.PNG" alt="project image"
      width={800}
      height={800}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>CALCULATOR</h3>
        <p className="font-semibold text-black">This is the  CLI calculator which perform the 4 basic functions.It is based on TypeScript.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://github.com/areesha-22/simple-calculator-"><FaExternalLinkAlt /></Link></div>
      </div>
  </div>
  <div className="port-box ">
  <Image src="/todo.PNG" alt="project image"
      width={800}
      height={900}  className="port-image"/>
      <div className="port-content">
       <h3 className='font-sans font-extrabold text-2xl  text-[black]'>TODO LIST</h3>
        <p className="font-semibold text-black">A user-friendly and interactive To-Do List application built using TypeScript. This app enables users to create&lsquo;edit&lsquo;and manage their tasks efficiently.</p>
        <div className='bg-white rounded-full inline-flex justify-center items-center w-10 h-10 border-[1px] border-solid outline-2 text-[#37AFE1] text-2xl'><Link href="https://github.com/areesha-22/TODO-List" target='blank'><FaExternalLinkAlt /></Link></div>
      </div>
  </div></div>
</div>



  )
}


