  import React from "react";
  import { HiArrowNarrowRight } from "react-icons/hi";
  import profileImage from "../assets/avatar.svg";  
  
  
   const Home = () => {
    return (
      <div className="w-full h-full bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-between h-full items-center">
          <div className="md:w-2/3">
            <p className="text-pink-500 mt-20 md:text-xl">Hi my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6]">
              Naveen Bupati
            </h1>
            <h2 className="text-4xl md:text-6xl font-medium text-[#8892b0]">
              I'm a Full Stack Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[600px]">
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences. Currently,
              I’m focused on building responsive full-stack web applications.
            </p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work <HiArrowNarrowRight />
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/3 md:ml-6 mt-8 md:mt-0">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-lg w-80 mt-12 h-80 object-cover  ml-20 md:ml-20"
            />
          </div>
        </div>
      </div>
    );
  };

  export default Home;
