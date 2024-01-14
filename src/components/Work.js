import React from "react";
import Experience from "../assets/home-main.svg"
import About from "../assets/about.png"
import {Link} from 'react-scroll'

const Work = () => {
    return (
        <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">

                <div className="md:flex md:justify-between mt-20">


                    <div className="md:w-1/2 md:pl-8">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Work</p>
                        <p className="py-12" >I Base It Software Solutions, 6 Months
                            "I contributed critical DevOps support to MyRythm, apivotal healthcare project, driving seamless operationsand continuous enhancements for 6 months. LeveragingAWS infrastructure, I optimized deployment pipelines,orchestrated automated workflows, and ensured robustsystem reliability. My role involved streamlining processes,enhancing scalability, and collaborating cross-functionallyto maintain a high-performance environment, laying afoundation for sustainable growth and innovation withinthe healthcare domain."</p>
                    </div>


                    <div className="md:w-1/2 md:pr-8">
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ml-20'>
                            <img src={Experience} alt="HTML icon" />

                        </div>

                    </div>
           
                </div>
                
               
                <div className="md:flex md:justify-between">
                 

                <div className="md:w-1/2 md:pr-8 pb-10">
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-24'>
                            <img src={About} alt="HTML icon" className="mt-20"/>

                        </div>

                    </div>
           

                    <div className="md:w-1/2 md:pl-8 py-24  px-4">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Internship</p>
                        <p className="py-12 ">I Base It Software Solutions, 6 Months
                            "I contributed critical DevOps support to MyRythm, apivotal healthcare project, driving seamless operationsand continuous enhancements for 6 months. LeveragingAWS infrastructure, I optimized deployment pipelines,orchestrated automated workflows, and ensured robustsystem reliability. My role involved streamlining processes,enhancing scalability, and collaborating cross-functionallyto maintain a high-performance environment, laying afoundation for sustainable growth and innovation withinthe healthcare domain."</p>
                    </div>


                    
                </div>
        
                    
            </div>
        </div>

    );
};

export default Work;
