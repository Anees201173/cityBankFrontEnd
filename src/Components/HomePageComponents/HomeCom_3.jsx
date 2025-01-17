import React from 'react';
import { MdAccountBalanceWallet } from "react-icons/md";
import { motion } from "framer-motion";

function HomeCom_3() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <>
        <div className='relative bottom-[400px]'>
            <div className="  w-full text-center px-4 sm:px-8  lg:px-16 py-10 ">
                <motion.h1
                   initial={{ opacity: 0, y: -50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                >
                    Powerful Features
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-200 text-base sm:text-lg lg:text-xl mt-4"
                >
                    Offer different plans or highlight free features
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-center items-start mt-10     lg:mt-16">
                    <motion.div
                        className="bg-gradient-to-t from-[#171717] to-[#3a3636] w-full rounded-[40px] p-6 sm:p-8 sm:h-[800px]"
                        initial={{ x: -200 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        variants={cardVariants}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                            Grow your wealth
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-[#838181] text-justify mb-8">
                            Access investment tools and resources to reach your financial goal faster.
                        </p>
                        <div className="flex flex-col gap-y-6 sm:gap-y-[80px] lg:gap-y-12">
                            <h1 className="text-[#414141] text-base sm:text-lg lg:text-2xl font-semibold">
                                Advanced Budgeting
                            </h1>
                            <h1 className="text-[#BCBCBC] text-lg sm:text-xl lg:text-3xl font-semibold">
                                Manage Savings
                            </h1>
                            <h1 className="text-white text-lg sm:text-2xl lg:text-4xl font-semibold">
                                Bill Pay Functionality
                            </h1>
                            <h1 className="text-[#BCBCBC] text-lg sm:text-xl lg:text-3xl font-semibold">
                                Multi Currency
                            </h1>
                            <h1 className="text-[#414141] text-base sm:text-lg lg:text-2xl font-semibold">
                                Investment Access
                            </h1>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-y-6">
                        <motion.div
                            className="bg-gradient-to-t from-[#171717] to-[#3a3636] w-full rounded-[40px] p-6 sm:p-8 sm:h-[400px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                                Financial Management
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-[#838181] text-justify mb-6">
                                Budgeting tools, spending trackers, and goal-setting functionality.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-4 sm:gap-y-0">
                                <div className="bg-gradient-to-t from-[#424141] to-[#3a3636] rounded-[35px] flex items-center px-6 py-3 w-full sm:w-auto">
                                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] mr-4">
                                        <MdAccountBalanceWallet />
                                    </div>
                                    <div>
                                        <h1 className="text-sm sm:text-base text-[#838181]">
                                            Total Balance
                                        </h1>
                                        <h1 className="text-white text-base sm:text-lg">
                                            IDR21.000.000
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-t from-[#171717] to-[#3a3636] w-full rounded-[40px] p-6 sm:p-8 sm:h-[400px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                                Financial Management
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-[#838181] text-justify">
                                Send and receive money internationally with ease.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeCom_3;
