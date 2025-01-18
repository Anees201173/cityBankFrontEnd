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
      <div className='bg-[#03020C] w-full text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-[70px] p-8'>
          {
            cardsData.map((card, index) => (
              <div key={index} className=' '>
                <img src={card.image} alt={card.title} className='w-[600px] object-cover rounded-md ' />
                <div className='mt-4'>
                  <p className='text-gray-300 mt-[15px]'>{card.data}</p>
                  <h3 className='text-[17px] font-bold mt-[10px]'>{card.title}</h3>
                  <p className=' sm:w-[500px] text-justify text-gray-300 text-[15px] font-semibold mt-[10px] md:[600px]'>{card.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeCom_7;
