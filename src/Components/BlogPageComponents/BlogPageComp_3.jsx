import React from 'react';
import { FaRegMoneyBillAlt, FaPiggyBank, FaShieldAlt, FaBitcoin, FaCreditCard, FaCoins } from 'react-icons/fa';

function BlogPageComp_3() {
  const categories = [
    { icon: <FaRegMoneyBillAlt />, title: 'Financial' },
    { icon: <FaShieldAlt />, title: 'Investment' },
    { icon: <FaPiggyBank />, title: 'Saving' },
    { icon: <FaBitcoin />, title: 'Crypto' },
    { icon: <FaCreditCard />, title: 'Credit' },
    { icon: <FaCoins />, title: 'Gold' },
  ];

  return (
    <div className="bg-[#03020C] text-white p-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Featured categories</h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          At Nexova, our commitment goes beyond conventional solutions; we are on a quest to master the intricacies of digital excellence.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#151515] p-4 rounded-[20px] transition duration-300"
          >
            <div className="flex items-center justify-center bg-gradient-to-t from-[#10C6FE] to-sky-300 text-black text-xl p-3 rounded-[10px]">
              {category.icon}
            </div>
            <h3 className="text-1xl font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPageComp_3;
