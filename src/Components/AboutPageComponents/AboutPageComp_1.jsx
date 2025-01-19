import React from 'react'
import HomeCom_2 from '../HomePageComponents/HomeCom_2';

function AboutPageComp_1() {
    return (
        <>
            <div className="py-8 sm:py-12 md:py-16 ">
                <div className="flex gap-x-2 justify-center items-center mb-6 sm:mb-8">
                    <div className="text-2xl font-bold text-sky-500">
                        <span className="bg-gradient-to-r from-sky-500 to-green-500 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl">
                            C
                        </span>
                    </div>
                    <h1 className="text-xl font-bold sm:text-2xl text-white">Citybank</h1>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 sm:mt-12 md:mt-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100 text-center">
                        Empowering You on Your
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100 text-center mt-[20px]">
                        Financial Journey
                    </h1>
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex justify-center mt-8 sm:mt-12 md:mt-5">
                    <img
                        src="https://framerusercontent.com/images/iBpB2QVfKzVP19PsYoqCvAHZ7Q.png"
                        alt="About Image"
                        className="w-full object-cover rounded-lg"
                    />
                </div>

                <div className='flex justify-center items-center text-white'>
                    <div className='flex flex-col justify-center items-center px-4 sm:px-6 md:px-12'>
                        <h1 className='mt-[60px] font-bold text-3xl sm:text-4xl md:text-5xl'>
                            Get to Know About Us
                        </h1>
                        <div className='w-full sm:w-[600px] md:w-[900px] text-2xl sm:text-3xl md:text-4xl text-center mt-[40px]'>
                            <p>
                                <span className='text-[#B1B1B1]'>We're more than just a bank.</span>
                                <span className='text-[#5A5A5A]'> At Citybank, we're your financial partner, dedicated to helping you achieve your goals.</span>
                                <span className='text-[#B1B1B1]'> We understand that everyone's financial journey</span>
                                <span className='text-[#5A5A5A]'> is unique, and that's why we offer a secure and innovative digital banking platform designed to simplify your finances and empower you to take control.</span>
                            </p>
                        </div>
                        <div className='flex justify-center gap-x-12 items-center mt-[50px] text-[#B1B1B1] text-3xl sm:text-4xl md:text-5xl font-bold'>
                            <div className='border-r-[2px] pr-8'>
                                124M+
                               
                            </div>
                            <div className='border-r-[2px] pr-8'>
                                5.00
                            </div>
                            <div className=''>
                                25+
                            </div>
                        </div>
                    </div>
                </div>

                    <div>
                        <HomeCom_2 />
                    </div>
            </div>
        </>
    );
}

export default AboutPageComp_1;
