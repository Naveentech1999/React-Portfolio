import { React , useState } from 'react'
import { FaBars , FaTimes , FaGithub , FaLinkedin , FaFacebook } from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/logo1.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const menuClick = () => setNav(!nav)

    
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center bg-[#0a192f] px-5 '>
        <div>
            <a href='#'><img src= {Logo} alt='logo image' style={{width:"160px", marginTop:"18px"}} /> </a>
        </div>
       
        <ul className='hidden md:flex text-gray-300 font-bold'>
        <li>
         
          Home
        
        </li>
        <li>
         
            About
        
        </li>
        <li>
         
            Skills
        
        </li>
        <li>
         
            WorkExperience
        
        </li>
        <li>
         
            Contact
        
        </li>
      </ul>

        
        <div onClick = {menuClick} className=' sm:hidden z-10 text-white'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>
        
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl text-gray-300 font-bold'>
            
            Home
        
        </li>
        <li className='py-6 text-4xl text-gray-300 font-bold'>
          
            About
        
        </li>
        <li className='py-6 text-4xl text-gray-300 font-bold'>
          
            Skills
        
        </li>
        <li className='py-6 text-4xl  text-gray-300 font-bold'>
          
            WorkExperience
        
        </li>
        <li className='py-6 text-4xl text-gray-300 font-bold'>
          
            Contact
        
        </li>
      </ul>


            {/*Socila icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/naveenbupati/' target='blank'>linkdeen <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Naveentech1999' target='blank'>Github <FaGithub size={30}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='#'>linkdeen <FaFacebook size={30}/>
                    </a>
                </li> */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='#'>Mail <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://in.docs.wps.com/l/sIJbarPMwm7XgrAY?v=v2' target='blank'>Resume<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                 
                
            </ul>

        </div>
    </div>
  )
}


export default Navbar