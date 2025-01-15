import React from "react";
import { motion } from "framer-motion";

function HomeCom_1() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <div className="flex flex-col items-center justify-between flex-grow px-4 md:px-8">
        <div className="mt-8 text-center">
          <div className="mb-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Smart Digital Banking For a
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2 text-gray-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Brighter Financial Future
            </motion.h1>
          </div>

          <div className="mb-8 max-w-xl mx-auto">
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Manage your money, grow your savings, and achieve your goals with
              our secure and easy-to-use digital banking platform.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-gradient-to-t from-[#10C6FE] to-white text-black px-6 py-3 rounded-full text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Open an Account Today
            </motion.button>
            <motion.button
              className="bg-transparent border-[2px] border-gray-600 px-6 py-3 rounded-full text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Watch Video
            </motion.button>
          </div>

          <div className="   relative mt-12 w-full flex  justify-center items-center  ">
            <div className="relative w-full max-w-2xl mx-auto flex justify-center items-center">
              <motion.img
                src="https://framerusercontent.com/images/oVzsjnF7pbuUpFOa6pbEvrVE.png"
                alt="Card 1"
                className="w-[40%] sm:w-[50%] md:w-[50%] lg:w-[40%] rotate-[-5deg] z-10 absolute"
                style={{ top: "10%", left: "40%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              />

              <motion.img
                src="https://framerusercontent.com/images/nUekvLII8vRBFNKYaYDbim4pdI.png"
                alt="Card 2"
                className="w-[50%] sm:w-[60%] md:w-[40%] lg:w-[50%] rotate-[0deg] z-0 absolute "
                style={{ top: "30%", right: "40%",left: "10%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCom_1;
