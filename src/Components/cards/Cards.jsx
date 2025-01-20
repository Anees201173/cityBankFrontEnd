import React from 'react';

function Cards({ data }) {
  return (
    <div>
      <div className="bg-[#03020C] w-full text-white">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-8">
          {data.map((card, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-cover rounded-md"
              />
              <div className="mt-4">
                <p className="text-gray-300 mt-2">{card.data}</p>
                <h3 className="text-lg sm:text-xl font-bold mt-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-justify text-gray-300 font-semibold mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
