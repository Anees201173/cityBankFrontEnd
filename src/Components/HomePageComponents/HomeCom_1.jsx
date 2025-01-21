import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

function HomeCom_1() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <div className="flex items-center gap-3 mb-10 relative mt-10 sm:mt-6 mx-auto text-center">
        <div className="text-2xl font-bold text-sky-500 mt-[60px]">
          <span className="bg-gradient-to-r from-sky-500 to-green-500 text-transparent bg-clip-text">
            C
          </span>
        </div>
        <h1 className="text-xl font-bold sm:text-2xl">Iswiss bank</h1>
      </div>

      <div className="flex flex-col items-center justify-between flex-grow px-4 md:px-8 lg:px-16">
        <div className="mt-8 text-center">
          <div className="mb-6">
          <div className="text-center px-4 sm:px-6 md:px-8">
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Smart Digital Banking For a
  </motion.h1>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight mt-4 text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Brighter Financial Future
  </motion.h1>
</div>

          </div>

          <div className="mb-8 max-w-xl mx-auto">
          <motion.p
  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed text-center px-4 sm:px-6 lg:px-8"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  Manage your money, grow your savings, and achieve your goals with our secure and easy-to-use digital banking platform.
</motion.p>

          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-gradient-to-t from-[#10C6FE] to-sky-300 text-black px-6 py-3 rounded-full text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Open an Account Today
            </motion.button>
            <motion.button
              className="bg-transparent border-[2px] border-gray-600 px-6 py-3 rounded-full text-sm sm:text-base md:text-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaPlay className="text-gray-600 text-lg sm:text-xl md:text-2xl" />
              Watch Video
            </motion.button>
          </div>

          <div className="relative mt-12 w-full flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-auto flex justify-center items-center">
              <motion.img
                src="https://framerusercontent.com/images/oVzsjnF7pbuUpFOa6pbEvrVE.png"
                alt="Card 1"
                className="w-[40%] sm:w-[50%] md:w-[50%] lg:w-[50%] rotate-[-5deg] z-10 absolute"
                style={{ top: "10%", left: "50%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              />

              <motion.img
                src="https://framerusercontent.com/images/nUekvLII8vRBFNKYaYDbim4pdI.png"
                alt="Card 2"
                className="w-[50%] sm:w-[60%] md:w-[40%] lg:w-[70%] rotate-[0deg] z-0 absolute"
                style={{ top: "30%", right: "40%", left: "10%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[190px] sm:mt-[40px] md:mt-[500px]">
        <hr className="h-[2px] bg-gradient-to-r from-black via-[rgba(0,183,195,1)] to-[rgba(167,223,0,1)] border-none" />
      </div>
    </div>
  );
}

export default HomeCom_1;
