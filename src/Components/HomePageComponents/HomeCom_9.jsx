import React from 'react';

function HomeCom_9() {
    return (
        <div className="w-full h-screen bg-[#03020C] text-white flex justify-center items-center">
            <div className="bg-[#151515] p-6 md:p-12 w-[90%] md:w-[80%] max-w-[1100px] h-auto rounded-[30px] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="hidden md:block">
                    <img
                        src="https://framerusercontent.com/images/w7qQ0LefbFSsbrH1JX479IUJrRk.png"
                        alt="Banking illustration"
                        className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
                    />
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-6 md:gap-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-[400px]">
                        Get started with Digital Banking Today
                    </h1>
                    <button className="bg-gradient-to-t from-[#10C6FE] to-sky-300 text-black px-6 py-3 rounded-full text-sm sm:text-base md:text-lg">
                        Open an Account Today
                    </button>
                </div>

                <div className="hidden md:block">
                    <img
                        src="https://framerusercontent.com/images/Oj86HlscGdgIOLQprEBj8Y5Y3E.png"
                        alt="Banking app mockup"
                        className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeCom_9;
