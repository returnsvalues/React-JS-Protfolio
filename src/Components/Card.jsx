import { motion } from "motion/react";

function Card() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        animate={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        className="max-w-screen-xl  m-auto my-20 flex justify-center sm:justify-center gap-44"
      >
        <motion.div className="h-64 w-64 rounded-md bg-zinc-100  shadow-lg shadow-zinc-200 flex items-center flex-col justify-center">
          <p className="text-lime-500 font-semibold">2D</p>
          <h3 className="text-zinc-500 text-xs font-medium">
            figma | photoshop
          </h3>
        </motion.div>
        <motion.div className="h-64 w-64 rounded-md bg-zinc-100 shadow-lg shadow-zinc-200 flex items-center flex-col justify-center">
          <h3 className="text-red-500  font-medium">Coding/Development</h3>
          <p className="text-zinc-500 text-xs font-medium">
            MERN stack Developer
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card;
