import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegCopyright } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="col-span-1 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl font-bold text-sky-500">
                            <span className="bg-gradient-to-r from-sky-500 to-green-500 text-transparent bg-clip-text">
                                C
                            </span>
                        </div>
                        <h1 className="text-xl font-bold">Citybank</h1>
                    </div>
                    <p className="text-sm">
                        We're more than just a bank. At Citybank, we're your financial partner.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-sky-500">Features</a></li>
                        <li><a href="#" className="hover:text-sky-500">Pricing</a></li>
                        <li><a href="#" className="hover:text-sky-500">Reviews</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-sky-500">Home</a></li>
                        <li><a href="/" className="hover:text-sky-500">About</a></li>
                        <li><a href="/" className="hover:text-sky-500">Contact us</a></li>
                        <li><a href="/" className="hover:text-sky-500">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Contacts us</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <span className="flex items-center gap-2">
                                <FaEnvelope />
                                <a href="mailto:contact@citybank.com">contact@citybank.com</a>
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center gap-2">
                                <FaPhoneAlt />
                                (414) 687 - 5892
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                794 Mcallister St, San Francisco, 94102
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold mb-4 text-center">Subscribe to our newsletter</h3>
                    <form className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                        <input
                            type="email"
                            placeholder="example.com"
                            className="px-4 py-2 text-white bg-[#323232] rounded-full w-full md:w-[300px] lg:w-[400px] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-t from-[#10C6FE] to-sky-300 px-4 py-2 text-white rounded-full hover:bg-sky-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-10">
                <hr className="bg-gray-700" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
                <div className="flex items-center">
                    <FaRegCopyright className="mr-1" />
                    <p>
                        2024 Citybank. All Rights Reserved.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <a href="/" className="hover:text-sky-500">
                        Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/" className="hover:text-sky-500">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
