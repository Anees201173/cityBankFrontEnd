import React from 'react';

function BlogPageComp_1() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-6 lg:p-12">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://framerusercontent.com/images/bS89DMPtTc84lp5XcXsddeYMk.jpg?scale-down-to=512"
            alt="Innovation"
            className="rounded-[25px] w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] h-auto object-cover mt-[100px]"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div>
            <h2 className="text-white text-sm sm:text-base lg:text-lg">
              May 27, 2024
            </h2>
          </div>

          <div className="mt-8 lg:mt-[50px] text-white font-bold leading-tight">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              The Future of Banking:
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              How Technology is
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Transforming the
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Industry
            </h1>
          </div>

          <p className="mt-6 lg:mt-[40px] text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Our user-friendly mobile app allows you to manage your finances anytime, anywhere.
            From checking accounts and budgeting tools to mobile check deposit and bill pay, we make banking effortless.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPageComp_1;
