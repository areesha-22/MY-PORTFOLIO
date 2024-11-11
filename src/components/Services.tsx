import { FaLaptopCode , FaSearchDollar, FaReact, FaPalette} from "react-icons/fa";



export default  function Services() {
    return(
        <div className="bg-black" id="services ">
            <div className="max-w-[1320px] md:py-[80] py-5 mx-auto pt-36 ">
                <h1 className="text-4xl text-center text-white font-sans font-extrabold  ">MY SERVICES</h1>
            </div>
          <div className="lg:w-[800px] mx-auto sm:w-96 py-[30px] grid lg:grid-cols-2  sm:grid-cols-1  gap-6   pb-40">
<div className=" p-4 text-center bg-white rounded shadow-custom hover:bg-[#37AFE1] hover:text-white duration-1000"> 
<div className="text-3xl  pl-36 animate-bounce"><FaLaptopCode /></div>
<h3 className="text-xl py-3 font-bold ">Web Design</h3>
<p>Transform your website into a stunning digital experience. My web design services include:

 Custom and responsive designs tailored to your brand
- User-friendly interfaces for seamless navigation
- Mobile-friendly designs for optimal viewing
- Engaging visuals and compelling content strategies
- Conversion-oriented design to drive results</p>
</div>
          
          
<div className=" shadow-custom p-4 text-center bg-white rounded  hover:bg-[#37AFE1] hover:text-white duration-1000"> 
<div className="text-3xl pl-36 animate-bounce"><FaReact /></div>
<h3 className="text-xl py-3 font-bold ">Web Development</h3>
<p>Expert web development solutions tailored to your business needs. I craft responsive &lsquo;  scalable&lsquo;  and secure web applications using cutting-edge technologies.
</p>
</div>
          
       
          
<div className=" shadow-custom p-4 text-center bg-white rounded hover:bg-[#37AFE1] hover:text-white duration-1000"> 
<div className="text-3xl  pl-36 animate-bounce"><FaPalette /></div>
<h3 className="text-xl py-3 font-bold">UI/UX DESIGN</h3>
<p>Expert UI/UX design solutions to craft intuitive and engaging digital experiences.Elevate your product&apos;s usability&lsquo;  accessibility&lsquo;  and visual appeal.
</p>
</div>
         
          
<div className=" shadow-custom p-4 text-center  bg-white rounded hover:bg-[#37AFE1] hover:text-white duration-1000"> 
<div className="text-3xl pl-40 animate-bounce"><FaSearchDollar /></div>
<h3 className="text-xl py-3 font-bold">SEO</h3>
<p>Expert SEO solutions to enhance your website&apos;s search engine rankings.
Boost your online visibility and drive organic traffic.</p>
Key SEO Services

1. Keyword Research
2. On-Page Optimization
3. Technical SEO
4. Link Building
5. Content Optimization
6. Analytics Setup
</div>
         
</div>
         </div>
    );
}                      