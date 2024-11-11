import {FaHome } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

export default function Bar () {
  return (
    <div className="overflow-hidden bg-black ">
      <div className="sidebar w-80 max-h-screen pb-52  space-y-8 px-16 top-0 font-medium text-lg bottom-0 overflow-y-hidden bg-black " >
       <div className=" meanuLink p-2.5 mt-10 flex items-center rounded-md gap-4  duration-500 cursor-pointer  hover:bg-white hover:text-[#5D89EE] text-white">
<span className="  text-[#37AFE1] flex  text-3xl animate-bounce"><FaHome/></span><a href="#home"> HOME</a> </div>
<div className="p-2.5 mt-10 flex items-center rounded-md gap-4 duration-500 cursor-pointer hover:bg-white hover:text-[#37AFE1] text-white">
<span className="   text-[#37AFE1]  text-3xl flex animate-bounce "><IoWomanSharp /></span><a href="#about">ABOUT ME </a></div>
<div className="p-2.5 mt-10 flex items-center gap-4 rounded-md  duration-500 cursor-pointer hover:bg-white hover:text-[#37AFE1] text-white">
<span className="   text-[#37AFE1] flex  text-3xl animate-bounce "> <GiSkills /></span><a href="#skills">MY SKILLS</a></div>
<div className="p-2.5 mt-10 flex items-center gap-4 rounded-md  duration-500 cursor-pointer hover:bg-white hover:text-[#37AFE1] text-white">
<span className="  text-[#37AFE1] flex  text-2xl animate-bounce"> <GrProjects /></span><a href="#project">MY PROJECTS</a></div>
<div className="p-2.5 mt-10 flex items-center rounded-md gap-4 duration-500 cursor-pointer hover:bg-white hover:text-[#37AFE1] text-white">
<span className="  text-[#37AFE1] flex  text-3xl animate-bounce"> < GrServices/></span><a href="#services">MY SERVICES</a></div>
<div className="p-2.5 mt-10 flex gap-4 items-center rounded-md  duration-500 cursor-pointer hover:bg-white hover:text-[#37AFE1] text-white">
<span className="   text-[#37AFE1] flex  text-2xl animate-bounce "> <BiSolidContact/></span><a href="#contact">CONTACT ME</a></div>
        
      </div>
     <div className="flex gap-80 overflow-hidden  ">
     <div className="flex ">
            <div className= "text-[#37AFE1] absolute  lg:left-96 lg:bottom-60 sm:right-14 ">
                <div >
                <span className="font-bold pb-14 text-5xl">  <span className="text-white">Hi IT&apos;S ME </span><br></br> AREESHA </span><br></br><span className="font-extrabold text-5xl" >WEB DEVELOPER</span></div>
                <div className="btn-box mt-11">
                <a className="btn ">RESUME</a>
               <a href=" #contactpage" className="btn  ">HIRE ME</a>
             </div> </div></div>
             <div className="flex absolute  -right-56 top-10 overflow-hidden ">
      <div className="left-container bg-black  w-96 h-screen flex flex-col items-center justify-center pt-48 pl-24">
        
      </div>
      <div className="design relative w-1/2 h-screen flex items-center justify-center  " >
        <div className="circle bg-gradient-to-r from-transparent to-black w-80 aspect-square rounded-full absolute top-72 right-36 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="circle relative w-64 aspect-square rounded-full bottom-10 right-80 bg-cover border border-white shadow-lg" style={{ backgroundImage: "url('/areesha2.png')" }}>
          <style>{`
            .circle {
              box-shadow: 0 0 1rem #fff,
                          inset 0 0 1rem #fff,
                          0 0 2rem rgb(55, 175, 225),
                          inset 0 0 2rem rgb(55, 175, 225),
                          0 0 4rem rgb(55, 175, 225),
                          inset 0 0 4rem rgb(55, 175, 225);
            }
          `}</style>
        </div>
      </div>
    </div>
   
 </div></div>
  );
}
