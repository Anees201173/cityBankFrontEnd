import React from 'react';
import card1 from "../../../public/assets/Group_1686555581-removebg-preview.png"
import card2 from "../../../public/assets/Group_1686555579-removebg-preview.png"

function HomeCom_9() {
    return (
        <div className="w-full py-10 bg-[#030305] text-white flex justify-center items-center">
            <div className="bg-[#151515] p-6 md:p-12 w-[90%] md:w-[80%] max-w-[1100px] h-auto rounded-[30px] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="hidden md:block">
                    <img
                        src={card1}
                        alt="Banking illustration"
                        className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
                    />
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-6 md:gap-8">
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold max-w-[400px]">
                        Get started with Digital Banking Today
                    </h1>
                    <button className="bg-gradient-to-t from-[#e72434] to-[#030305] text-white px-6 py-3 rounded-full text-sm sm:text-base md:text-[10px]">
                        Open an Account Today
                    </button>
                </div>

                <div className="hidden md:block">
                    <img
                        src={card2}
                        alt="Banking app mockup"
                        className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeCom_9;
