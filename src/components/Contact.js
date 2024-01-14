import React from 'react';
import contact from "../assets/contact-img.svg";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">

        <div className="md:flex md:justify-between mt-10">
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-8 mt-20'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - naveenbhupathi22@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-3' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-3 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-3' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2  hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>

          <div className="flex flex-col justify-center items-center  ">
            <div className='hover:scale-110 duration-500  ml-20 mt-20'>
              <img src={contact} alt="Contact icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
