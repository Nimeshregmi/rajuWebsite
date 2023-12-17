import React from "react";
import Profilelayout from "./Profilelayout";
import Link from "next/link";

const Footer = () => {
  return (
    
      <footer className="w-full border-t-2 border-solid dark:border-light border-dark text-xl font-medium sm:text-base">
        
        <Profilelayout classname="!justify-between !flex !py-8 !items-center dark:!text-light lg:!flex-col lg:!py-6 ">
            <span >{new Date().getFullYear()} &copy; All Right Reserved</span>
            <div className="flex items-center  flex-row lg:py-2">
            Build with <span className="text-2xl text-primary  px-1">&#9825;</span>By &nbsp;<Link className="underline underline-offset-4" target="_blank" href="https://regminimesh.com.np" >NimeshRegmi</Link>
            </div>
            <Link className="underline underline-offset-4 " target="_blank"   href="/">Say Hello</Link>
        </Profilelayout>
      </footer>
  );
};

export default Footer;
