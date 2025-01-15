import React from 'react'

function HomeCom_2() {
  return (
    <div>
      {/* First section with the heading */}
      <div className="bg-black text-white h-screen w-full text-center  font-bold mt-[200px] px-4 sm:px-8 md:px-16">
        <h1 className="text-2xl sm:">We've been mentioned in the press</h1>
        
        {/* Marquee */}
        <marquee direction="left" className="h-[50px] mt-[40px]">
          <ul className="flex gap-x-5 text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold text-white">
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

      {/* Empty second section (add content if needed) */}
      <div>
        {/* Additional content can go here */}
      </div>
    </div>
  )
}

export default HomeCom_2
