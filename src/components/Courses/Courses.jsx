import React from "react";

const Courses = () => {
  return (
    <div id="courses" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Courses
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          how to use ?
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
           
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                 As a teacher
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                The Course Management feature offers educators a simple yet powerful platform to create, control, and organize their course materials. Teachers can upload course content as PDFs via Google Drive links, control whether students can download the course materials, publish or unpublish courses, and access information about each course. They can also make edits or deletions as needed to maintain updated and relevant content.
                </span>
                <a href="https://swiftlearn-web.onrender.com/dashboard/courses" target="_blank" rel="noopener noreferrer">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                   start now
                </span>
                </a>
                <p className=" text-[.9rem] text-justify text-gray-500">
                
                </p>
              </div>
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex mt-4 flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                As a student                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Students can access and download course materials when teachers make them available. This feature ensures that students have easy access to the necessary resources for their learning.                </span>
                <a href="https://swiftlearn-web.onrender.com/dashboard/courses" target="_blank" rel="noopener noreferrer">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                   start now
                </span>
                </a>
                
                <p className=" text-[.9rem] text-justify text-gray-500">
                
                </p>
              </div>
            </div>
            
          </fieldset>
          
        </div>
      </div>
    </div>
  );
};

export default Courses;
