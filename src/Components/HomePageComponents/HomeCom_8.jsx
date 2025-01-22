import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-4 right-4 transform bg-[#030305] p-3 rounded-full cursor-pointer text-white flex justify-center items-center z-10"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-4 left-4 transform bg-black p-3 rounded-full cursor-pointer text-white flex justify-center items-center z-10"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: "https://framerusercontent.com/images/QKRN6QKp6PTFyfL4hvalUfN99f8.png?scale-down-to=512",
      text: "I finally feel like I'm winning with my finances! [Bank Name]'s budgeting tools helped me identify unnecessary spending and save more towards my dream vacation.",
      name: "Sarah Hillary",
      role: "Marketing Manager (Chicago, IL)",
    },
    {
      img: "https://framerusercontent.com/images/QKRN6QKp6PTFyfL4hvalUfN99f8.png?scale-down-to=512",
      text: "The tools provided by [Bank Name] made it so easy to create a budget and stick to it. I feel so much more in control of my finances now!",
      name: "John Doe",
      role: "Entrepreneur (San Francisco, CA)",
    },
  ];

  return (
    <div className="bg-[#030305] w-full min-h-screen text-white px-6 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-left">
        Testimonial
      </h1>

      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
              <div className="flex justify-center items-center w-full">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center justify-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg md:text-xl mt-[50px]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                    <FaQuoteRight className="text-4xl text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
