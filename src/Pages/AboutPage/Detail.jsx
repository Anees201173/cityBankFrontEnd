import React from 'react';
import Cards from '../../Components/cards/Cards';
import HomeCom_9 from '../../Components/HomePageComponents/HomeCom_9';

function Detail() {
  const cardsData = [
    {
      image: "https://framerusercontent.com/images/f40R3D0EQfVRovF4bbNho8gbv4U.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them.",
    },
    {
      image: "https://framerusercontent.com/images/8KHPrceX3vCKT7MS4ox3pgp4knk.png",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them.",
    },
  ];

  return (
    <>
      <div className="bg-black">
        <div className="flex flex-wrap gap-x-2 justify-center items-center mb-6 sm:mb-8 ">
          <div className="text-2xl font-bold text-sky-500">
            <span className="bg-gradient-to-r from-sky-500 to-green-500 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl  " >
              C
            </span>
          </div>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl text-white">Citybank</h1>
        </div>

        <div className="text-white text-sm flex justify-center items-center">
          <button className="border-[1px] px-4 py-2 rounded-full">Investment</button>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 sm:mt-12">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              The Future of Banking: How
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Technology is Transforming
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              the Industry
            </h1>
          </div>

          <div className="p-4 sm:p-6 md:p-8 flex justify-center mt-8 sm:mt-12">
            <img
              src="https://framerusercontent.com/images/f40R3D0EQfVRovF4bbNho8gbv4U.png"
              alt="About Image"
              className="w-full  object-cover rounded-lg"
            />
          </div>

          <div className="text-white text-justify px-4 sm:px-6 md:px-8 mt-4 max-w-3xl">
            <p>
              This article explores the latest trends in digital banking, including artificial intelligence, blockchain technology, and
              mobile payments. It discusses how these advancements are changing the way we manage our finances.
            </p>
          </div>
        </div>

        <div className="bg-[#03020C] p-6 sm:p-8">
          <div className="flex flex-wrap justify-around items-center text-center sm:text-left gap-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Latest Articles</h1>
            <button className="bg-[#100F18] px-6 py-2 rounded-full text-sm sm:text-base  text-white">View</button>
          </div>
          <Cards data={cardsData} />
        </div>

        <div className="bg-black">
          <HomeCom_9 />
        </div>
      </div>
    </>
  );
}

export default Detail;
