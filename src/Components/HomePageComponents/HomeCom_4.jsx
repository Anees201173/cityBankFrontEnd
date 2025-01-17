import React from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import { motion } from "framer-motion";

function HomeCom_4() {
  const features = [
    {
      title: "We put you first",
      description:
        "We're committed to your financial success, offering award-winning customer service.",
      icon: RiChatSmile2Line,
    },
    {
      title: "Security is our priority",
      description:
        "Your money is safe with us. We use industry-leading security measures to protect your financial information.",
      icon: RiChatSmile2Line,
    },
    {
      title: "Innovation at your fingertips",
      description:
        "Experience a seamless banking experience with our cutting-edge mobile app.",
      icon: RiChatSmile2Line,
    },
    {
      title: "We speak your language",
      description:
        "We believe financial knowledge is key. We offer educational resources and personalized guidance.",
      icon: RiChatSmile2Line,
    },
  ];

  return (
    <>
      <div className="bg-[#03020C] min-h-screen w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center pt-16 sm:pt-20 md:pt-32 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ditch the Branch. Embrace
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your Financial Future.
          </h1>
        </motion.div>

        {/* Main Section */}
        <section className="flex flex-col md:flex-row justify-center items-center mt-10 sm:mt-16 md:mt-24 gap-y-8 md:gap-x-10 px-6 sm:px-16">
          {/* Image Section */}
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[350px] -mx-[50px]">
            <img
              src="https://framerusercontent.com/images/hKDMsmd2zpoxYDUUzWypeOiUY.png?scale-down-to=1024"
              alt="Card"
              className="w-full  sm:w-full md:relative right-[80px]"
            />
            <div className="w-[200px] sm:w-[290px] h-[60px] sm:h-[80px] rounded-[20px] bg-[#D8D8D8] opacity-30 absolute bottom-0 -right-[190px] transform -translate-x-1/2 border-[10px] border-white"></div>
          </div>
          {/* Content Section */}
          <div className="text-white text-center md:text-left max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Mastering Digital Solutions for a Future of Possibilities
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              At Nexova, our commitment goes beyond conventional solutions; we are on a quest to master the intricacies of digital excellence.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:mb-[155px]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 + index * 0.2 }}
                >
                  <div
                    className="flex items-center justify-center bg-gradient-to-t 
                    from-[#10C6FE] to-sky-300 p-3 sm:p-4 rounded-[15px] shadow-md"
                  >
                    <feature.icon size={24} className="text-black" />
                  </div>
                  <div >
                    <h3 className="text-base sm:text-lg font-semibold ">{feature.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm ">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeCom_4;
