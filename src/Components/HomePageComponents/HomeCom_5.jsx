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
    <div>
      <div className=" min-h-scree w-full text-white px-4 sm:px-6 lg:px-10">
       

        <div className="text-center mt-16">
          <h1 className="text-3xl md:text-[45px] font-bold">
            Simple & Transparent Pricing
          </h1>
          <p className="text-lg md:text-[23px] text-gray-200 mt-[30px]">
            Offer different plans or highlight free features.
          </p>
        </div>

        <div>
          <div className="bg-black text-white py-10 px-4 sm:px-10 mt-16">
          <div className="flex justify-center items-center mb-[50px] ">
          <div className="flex bg-[#151515] p-1 rounded-full">
            <motion.button
              className={`px-4 py-2 rounded-full  ${
                selected === "Monthly"
                  ? "bg-gradient-to-t from-[#10C6FE] to-sky-300 text-black"
                  : " hover:text-white"
              }`}
              onClick={() => setSelected("Monthly")}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor:
                  selected === "Monthly" ? "" : "",
              }}
              transition={{ duration: 0.2 }}
            >
              Monthly
            </motion.button>

            <motion.button
              className={`px-4 py-2 rounded-full  ${
                selected === "Yearly"
                  ? "bg-gradient-to-t from-[#10C6FE] to-sky-300 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setSelected("Yearly")}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor:
                  selected === "Yearly" ? "" : "",
              }}
              transition={{ duration: 0.6 }}
            >
              Yearly
            </motion.button>
          </div>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-[#171717] to-[#3a3636] p-6 rounded-[40px] shadow-lg transition-transform transform hover:scale-105 h-auto"
                >
                  <h2 className="text-xl md:text-3xl font-semibold mb-4 text-gray-300">
                    {plan.name}
                  </h2>
                  <p className="text-2xl md:text-4xl font-bold mb-6">
                    {plan.price}{" "}
                    <span className="text-base md:text-xl text-gray-300 font-semibold">
                      /Month
                    </span>
                  </p>
                  <p className="mb-4 text-gray-300 text-sm md:w-[300px] md:text-[20px] font-semibold">
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
                  <button className="w-full bg-transparent border-[2px] border-gray-400 py-3 rounded-[50px] hover:bg-gradient-to-b from-[#10C6FE] to-sky-300 hover:text-black hover:border-none transition-all ease-out duration-300 mt-10">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCom_5;
