import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="work" className=" mx-auto m-auto h-[100px]  mt-16 sm:h-[50px]">
      <div className=" bg-gradient-to-r from-white via-blue-100 to-blue-300 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
  
        
        <div className="sm:text-[12px] ">
          | Copyright &copy; <span>2023 swiftlearn </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
