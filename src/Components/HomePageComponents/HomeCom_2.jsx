import React from "react";
function HomeCom_2() {
  return (
    <div className=" relative  text-white  w-full text-center font-bold mt-[100px] px-4 sm:px-8 sm:relative  md:px-16 md:relative md:bottom-[100px]">
      <h1 className="text-1xl sm:text-1xl lg:text-2xl">We've been mentioned in the press</h1>
      <marquee direction="left" className="h-[50px] mt-[40px]  ">
        <ul className="flex gap-x-5 text-[30px]  sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold text-[#5A5A5A] ">
          <li>GIZMODO</li>
          <li>Bloomberg</li>
          <li>Forbes</li>
          <li>The Washington Post</li>
          <li>GIZMODO</li>
          <li>Bloomberg</li>
          <li>Forbes</li>
          <li>The Washington Post</li>
        </ul>
      </marquee>
    </div>
  );
}

export default HomeCom_2
