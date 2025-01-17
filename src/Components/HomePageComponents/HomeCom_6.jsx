import React from 'react';

function HomeCom_6() {
  return (
    <>
      <div className="bg-[#03020C] w-full min-h-screen text-white flex flex-col lg:flex-row justify-center items-center lg:items-start p-4">
        {/* Left Section */}
        <div className="text-center lg:text-left relative lg:top-[50px] lg:right-[100px] mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold w-full lg:w-[500px]">
            Simple & Transparent Pricing
          </h1>
          <p className="mt-[20px] text-base lg:text-xl text-gray-300">
            Offer Different Plans or Highlight Free Features.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-y-6 mt-8 lg:mt-[60px] w-full lg:w-auto">
          <select className="w-[80%] sm:w-[500px] md:w-[600px] h-[70px] bg-[#151515] text-white rounded-[15px] p-2 outline-none transition-all text-[16px] sm:text-[20px] font-semibold">
            <option value="free">What are the benefits of using digital banking?</option>
          </select>

          <select className="w-[80%] sm:w-[500px] md:w-[600px] h-[70px] bg-[#151515] text-white rounded-lg p-2 outline-none transition-all text-[16px] sm:text-[20px] font-semibold">
            <option value="free" className=''>What are the benefits of using digital banking?</option>
          </select>

          <select className="w-[80%] sm:w-[500px] md:w-[600px] h-[70px] bg-[#151515] text-white rounded-lg p-2 outline-none transition-all text-[16px] sm:text-[20px] font-semibold">
            <option value="free">What are the benefits of using digital banking?</option>
          </select>

          <select className="w-[80%] sm:w-[500px] md:w-[600px] h-[70px] bg-[#151515] text-white rounded-lg p-2 outline-none transition-all text-[16px] sm:text-[20px] font-semibold">
            <option value="free">What are the benefits of using digital banking?</option>
          </select>

          <select className="w-[80%] sm:w-[500px] md:w-[600px] h-[70px] bg-[#151515] text-white rounded-lg p-2 outline-none transition-all text-[16px] sm:text-[20px] font-semibold">
            <option value="free">What are the benefits of using digital banking?</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default HomeCom_6;
