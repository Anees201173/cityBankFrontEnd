import React from 'react';

function HomeCom_7() {
  const cardsData = [
    {
      image: "https://framerusercontent.com/images/f40R3D0EQfVRovF4bbNho8gbv4U.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
    {
      image: "https://framerusercontent.com/images/8KHPrceX3vCKT7MS4ox3pgp4knk.png",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
    {
      image: "https://framerusercontent.com/images/JfQbHHYAwzdxmTjApedx3Fc5so.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
    {
      image: "https://framerusercontent.com/images/Edg95NxYbDk8h9fYfmCqy6AOI.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
    {
      image: "https://framerusercontent.com/images/l0CTMmLyXisKfHY3QlMBrZkLZQI.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
    {
      image: "https://framerusercontent.com/images/58EfXuUCVBGYLYzsBbAVu250M.png?scale-down-to=1024",
      data: "May 27, 2024",
      title: "New Video: Unraveling the Mysteries of Quantum Entanglement",
      description: "In this video, we delve into the fascinating world of quantum entanglement, where particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance between them."
    },
  ];

  return (
    <div>
      <div className="text-white flex flex-row mt-[80px] md:flex-row justify-around items-center gap-4 md:gap-0">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Articles
        </h1>
        <button className="bg-[#222030a5] w-[80px] sm:w-[100px] px-4 py-2 rounded-full text-sm sm:text-base">
          View
        </button>
      </div>

      <div className="bg-[#03020C] w-full text-white">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-8">
          {
            cardsData.map((card, index) => (
              <div key={index} className="flex flex-col">
                <img src={card.image} alt={card.title} className="w-full  object-cover rounded-md" />

                <div className="mt-4">
                  <p className="text-gray-300 mt-2">{card.data}</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">{card.title}</h3>
                  <p className="text-sm sm:text-base text-justify text-gray-300 font-semibold mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default HomeCom_7;
