import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";





const Contact = () => {
    return (
        <div className="bg-[#030305] text-white  flex flex-col items-center justify-center px-4 sm:px-8 py-10">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4 mt-[90px]">Drop us a line</h2>
                    <p className="mb-6 text-gray-400 text-sm sm:text-base">
                        At Nexova, our commitment goes beyond conventional solutions; we are on a quest to master the intricacies of digital excellence.
                    </p>
                    <form className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-3 bg-[#323232] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C2FF]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Example@mail.com"
                                    className="w-full px-4 py-3 bg-[#323232] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C2FF]"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 mt-[20px]" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 bg-[#323232] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02C2FF]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-gradient-to-t from-[#e72434] to-[#030305] text-white py-3 px-6 text-[15px] rounded-[30px] transition duration-300 hover:opacity-90"
                        >
                            Submit message
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-64 sm:h-[400px] bg-gray-800 rounded-[30px] overflow-hidden mb-4">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8402914129374!2d-122.42165448468105!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2d2b1f7f%3A0x2b9e7f4dbb7e903d!2sPapakeechie%20Lake!5e0!3m2!1sen!2sus!4v1692291770331!5m2!1sen!2sus"
                            className="w-full h-full"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-lg">Visit us</p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            2118 Thornridge Cir, Syracuse, Connecticut 35624
                        </p>
                    </div>
                    <div>
                 <h1 className="mt-[10px] font-semibold">
                 Social media
                 </h1>


                    </div>
                    <div className="flex space-x-4 mt-2">
                        <FaFacebookF />
                        <div className="text-white">

                            <GrTwitter />
                        </div>
                        <div className="text-white">

                            <AiFillInstagram />
                        </div>
                        <div className="text-white">

                            <TbBrandLinkedinFilled />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
