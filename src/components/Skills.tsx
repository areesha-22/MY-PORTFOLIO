'use client'
import React from "react";

import { FaHtml5 ,FaFileWord  } from "react-icons/fa";
import { RiTailwindCssFill ,RiNextjsLine } from "react-icons/ri";
import { SiTypescript ,SiAdobeillustrator , SiOnlyoffice  } from "react-icons/si";
import { IoShareSocial } from "react-icons/io5";

const Skills = () => {
  return (
    <div >
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white"id="skills">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-4xl text-orange-600 flex-shrink-0">
                <FaHtml5 />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
              
                    HTML
                  
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-[#37AFE1] rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">100%</p>
                </div>
              </div>
            </div>
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-[#37AFE1] rounded-full  flex-shrink-0">
                  <RiTailwindCssFill />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                  
                   Tailwind-CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right ">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-[#37AFE1]  flex-shrink-0">
                  <SiTypescript />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
             
                   TypeScript / JavaScript

                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-white  flex-shrink-0">
                  <RiNextjsLine />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
              
                   Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-blue-400 flex-shrink-0">
                  <FaFileWord />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
            
                   MS Office
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">85%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-red-800 flex-shrink-0">
                  <SiAdobeillustrator />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
               
                   Adobe Photoshop
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-4xl text-white flex-shrink-0">
                  <SiOnlyoffice />
                  </div>
                
               
                  <h2 className="text-white text-lg title-font font-medium">
                 
                   Office Administration
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">90%</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-5xl text-purple-400 flex-shrink-0">
                  <IoShareSocial />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                
                   Social Media Management
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-[#37AFE1] h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-[#37AFE1] text-right">95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;