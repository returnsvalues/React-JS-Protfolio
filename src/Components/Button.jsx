import { delay } from "motion";
import { motion, animate, stagger } from "motion/react";
import React from "react";

function Button() {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-screen-xl m-auto flex justify-center items-center">
        <motion.h1 className="py-2 px-20 rounded-md font-medium text-2xl bg-gray-300 ">
          /code
        </motion.h1>
      </div>
    </div>
  );
}

export default Button;
