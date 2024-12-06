import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

function Section() {
  return (
    <>
      <Button />
      <div className="">
        <div className="max-w-screen-xl m-auto text-center">
          <div className="text-center font-['LWT'] tracking-tighter text-5xl font-bold ">
            Hello, <br /> I'm a Uttam.!
          </div>
          <div className="h-12 w-12 bg-[#db39d0aa] top-[30%] left-[2%] fixed blur-[30px]"></div>
          <div className="h-12 w-12 bg-[#55b997fd] top-[70%] right-[12%] fixed blur-[30px]"></div>
          <motion.p className="w-2/3 mx-auto mt-5  text-zinc-500 sm:mt-5 font-light sm:w-1/3 text-lg sm:text-lg leading-tight">
            I am a Designer/Developer, I combine aesthetics with functionality
            to craft seamless, engaging, and high-performance digital
            experiences.
          </motion.p>
        </div>
       
      </div>
    </>
  );
}

export default Section;
