import React from 'react';
import { MdTimelapse } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";


function AboutPageComp_2() {
    return (
        <>
            <div className="bg-black text-white ">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-6 lg:p-12">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            src="https://framerusercontent.com/images/bS89DMPtTc84lp5XcXsddeYMk.jpg?scale-down-to=512"
                            alt="Innovation"
                            className="rounded-[25px] w-full max-w-[500px] h-auto max-h-[400px] object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start items-center gap-x-4">
                            <div className="w-[40px] bg-[#43D1FF] flex items-center justify-center py-[10px] rounded-[5px] text-black">
                                <MdTimelapse />
                            </div>
                            <h2 className="text-sky-500 text-lg md:text-xl">Our Vision</h2>
                        </div>

                        <div className="mt-8 lg:mt-[50px]">
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                                Innovation at your fingertips
                            </h1>
                        </div>

                        <p className="mt-6 lg:mt-[40px] text-sm md:text-base leading-relaxed text-gray-300">
                            Our user-friendly mobile app allows you to manage your finances anytime, anywhere.
                            From checking accounts and budgeting tools to mobile check deposit and bill pay, we make banking effortless.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 p-6 lg:p-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start items-center gap-x-4">
                            <div className="w-[40px] bg-[#43D1FF] flex items-center justify-center py-[10px] rounded-[5px] text-black">
                                <FaPeopleGroup />
                            </div>
                            <h2 className="text-sky-500 text-lg md:text-xl">Our Value</h2>
                        </div>

                        <div className="mt-8 lg:mt-[50px]">
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                                Innovation at your fingertips
                            </h1>
                        </div>

                        <p className="mt-6 lg:mt-[40px] text-sm md:text-base leading-relaxed text-gray-300">
                            Our user-friendly mobile app allows you to manage your finances anytime, anywhere.
                            From checking accounts and budgeting tools to mobile check deposit and bill pay, we make banking effortless.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            src="https://framerusercontent.com/images/O2g576otyReoCarecWwCwHfUZ3k.jpg?scale-down-to=512"
                            alt="Innovation"
                            className="rounded-[25px] w-full max-w-[500px] h-auto max-h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPageComp_2;
