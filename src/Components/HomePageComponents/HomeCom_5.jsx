import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";

function HomeCom_5() {
  const [selected, setSelected] = useState("Monthly");

  const plans = [
    {
      name: "Free Plan",
      price: "IDR 0",
      features: [
        "Manage checking and savings accounts",
        "Send and receive money",
        "View transaction history",
        "Mobile banking access",
        "Basic budgeting tools (track income & expenses)",
      ],
      icon: IoMdCheckmark,
    },
    {
      name: "Essential Plan",
      price: "IDR 150.000",
      features: [
        "All features of Free Plan",
        "Mobile check deposit",
        "Bill pay functionality",
        "ATM fee reimbursements (limited)",
        "Budgeting tools (advanced features, goal setting)",
        "24/7 customer support (phone & chat)",
      ],
      icon: IoMdCheckmark,
    },
    {
      name: "Premium Plan",
      price: "IDR 250.000",
      features: [
        "All features of Essential Plan",
        "Investment account access",
        "Higher ATM fee reimbursements",
        "Priority customer support (dedicated line)",
        "Personalized financial advice consultations (limited)",
        "Multi-currency account management",
      ],
      icon: IoMdCheckmark,
    },
  ];

  return (
    <div className="min-h-screen w-full text-white px-4 sm:px-6 lg:px-10">
     <div className="text-center mt-12 sm:mt-16 px-4 sm:px-6 md:px-8">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
    Simple & Transparent Pricing
  </h1>
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[23px] text-gray-200 mt-6 sm:mt-8">
    Offer different plans or highlight free features.
  </p>
</div>


      <div className="bg-[#030305] text-white py-10 px-4 sm:px-10 mt-16">
        <div className="flex justify-center items-center mb-[50px]">
          <div className="flex bg-[#151515] p-1 rounded-full">
            <motion.button
              className={`px-4 py-2 rounded-full ${
                selected === "Monthly"
                  ? "bg-gradient-to-t from-[#e72434] to-[#030305] text-white"
                  : "hover:text-white"
              }`}
              onClick={() => setSelected("Monthly")}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              Monthly
            </motion.button>

            <motion.button
              className={`px-4 py-2 rounded-full ${
                selected === "Yearly"
                  ? "bg-gradient-to-t from-[#e72434] to-[#030305] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setSelected("Yearly")}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              Yearly
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-[#171717] to-[#3a3636] p-6 rounded-[40px] shadow-lg transition-transform transform hover:scale-105 h-auto"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
                {plan.name}
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {plan.price}{" "}
                <span className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">
                  /Month
                </span>
              </p>
              <p className="mb-4 text-gray-300 text-sm md:text-base lg:text-[20px] font-semibold">
                Send and receive money internationally with ease.
              </p>
              <hr />
              <ul className="mb-6 text-gray-300 mt-6 flex flex-col gap-3 font-semibold">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <span className="text-gray-300">
                      <plan.icon size={20} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent border-[2px] border-gray-400 py-3 rounded-[50px] hover:bg-gradient-to-b from-[#e72434] to-[#030305] hover:text-white hover:border-none transition-all ease-out duration-300 mt-10">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCom_5;
