import React from 'react';

function AboutPageComp_3() {
    const Cardsdata = [
        {
            image: "https://framerusercontent.com/images/zAL2aWtKXxoBwF75W7AR6nvtfWI.png?scale-down-to=512",
            name: "Tom Blano",
            title: "Head of Marketing",
        },
        {
            image: "https://framerusercontent.com/images/scuCMFuRxLasqftSTV8SSezKFk.png?scale-down-to=512",
            name: "John Doe",
            title: "Chief Technology Officer",
        },
        {
            image: "https://framerusercontent.com/images/toQdr0fJJ43B7IDxJECke2ugPmw.png?scale-down-to=512",
            name: "Jane Smith",
            title: "Product Manager",
        },
        {
            image: "https://framerusercontent.com/images/vdj6XrCgB63BzC9qMu27u0lNgOg.png?scale-down-to=512",
            name: "Alice Johnson",
            title: "Design Lead",
        },
        {
            image: "https://framerusercontent.com/images/OMXyhMPwNe6C6zQxTgAsXJnN5Y.png?scale-down-to=512",
            name: "Mike Brown",
            title: "Software Engineer",
        },
        {
            image: "https://framerusercontent.com/images/x1NOF0QDetahgmMREODyJd1vvQ.png?scale-down-to=512",
            name: "Sarah Lee",
            title: "HR Specialist",
        },
    ];

    return (
        <div className="bg-black text-white py-12 px-4">
            <div className="flex flex-col justify-center items-center text-center lg:-mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Introduce Our Team
                </h1>
                <p className="max-w-[500px] text-gray-300 text-sm sm:text-base">
                    At Nexova, our commitment goes beyond conventional solutions; we are on a quest to master the intricacies of digital excellence.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-[100px]">
                {Cardsdata.map((card, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center bg-gradient-to-t from-[#1C262A] to-[#171717] p-6 rounded-[30px] shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="relative -top-[10px]">
                            <img
                                src={card.image}
                                alt={card.name}
                                className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px] filter grayscale hover:grayscale-0 transition-all duration-300 rounded-md cursor-pointer"
                            />
                        </div>

                        <div className="z-10 -mt-2">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">{card.name}</h3>
                            <h4 className="text-sm md:text-base text-gray-400">{card.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutPageComp_3;
