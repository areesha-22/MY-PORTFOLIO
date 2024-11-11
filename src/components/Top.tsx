import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link"

export default function Topbar (){
    return(
       
            <div className="flex justify-between h-14 items-center px-4  text-white bg-black ">
                
                <div className="font-serif font-bold text-lg hover:text-[#37AFE1]" id="home">AREESHA QURESHI</div>
            
            <div className="flex gap-10 text-3xl ">
            <div className="hover:text-[#37AFE1]"> <Link href="https://github.com/areesha-22"> <FaGithub /></Link></div>
            <div className="hover:text-[#37AFE1]"><Link href="https://www.Linkedin.com/in/areesha-abdul-raheem-0aaba0223/"> <FaLinkedin /></Link></div>
            <div className="hover:text-[#37AFE1]"><Link href="/"> <FaTwitter /></Link></div>
            <div  className="hover:text-[#37AFE1]"> <Link href="/">  < SiGmail /></Link></div>
            </div>
            </div>
          
    );
} 