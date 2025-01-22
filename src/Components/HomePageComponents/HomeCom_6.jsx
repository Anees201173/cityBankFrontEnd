import React from 'react';

function HomeCom_6() {
  return (
    <>
      <div className="bg-[#030305] w-full min-h-screen text-white flex flex-col lg:flex-row justify-center items-center lg:items-start p-4">
        <div className="text-center lg:text-left relative lg:top-[50px] lg:left-[30px] mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full lg:w-[500px]">
            Simple & Transparent Pricing
          </h1>
          <p className="mt-[20px] text-base sm:text-lg lg:text-xl text-gray-300">
            Offer Different Plans or Highlight Free Features.
          </p>
        </div>

        <div className="flex flex-col gap-y-6 mt-8 lg:mt-[60px] w-full lg:w-auto lg:ml-[110px]">
          {[...Array(5)].map((_, index) => (
            <select
              key={index}
              className="w-full sm:w-full md:w-[600px] h-[70px] bg-[#151515] text-white rounded-[15px] p-2 outline-none transition-all text-[16px] sm:text-[18px] md:text-[20px] font-semibold"
            >
              <option value="free">What are the benefits of using digital banking?</option>
            </select>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeCom_6;
