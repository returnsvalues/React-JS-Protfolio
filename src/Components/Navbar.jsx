import gsap, { Power4 } from "gsap";
import { motion } from "motion/react";

function Navbar() {
  return (
    <div className="max-w-screen-xl  m-auto overflow-hidden">
      <div className=" py-12 px-12 flex gap-10 items-center justify-around">
        <div className="flex gap-9 justify-start">
          <motion.h1
            initial={{ opacity: 0 } }
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 2 }}
            className="font-medium text-lg"
          >
            Uttam
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 2 }}
            className="px-9 py-1 rounded-full text-white shadow-lg shadow-cyan-500/50 bg-sky-400"
          >
            Portfolio
          </motion.button>
        </div>
        <div className="sm:flex hidden gap-9 ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 2 }}
            className="font-medium text-sky-400"
          >
            Home
          </motion.h3>
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 2 }}
            className="font-normal text-zinc-400"
          >
            Work
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 2 }}
            className=" font-nurmal text-zinc-400 "
          >
            Download Resume
          </motion.h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
