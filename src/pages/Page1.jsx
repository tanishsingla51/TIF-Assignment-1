import React from "react";
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/open-sans";
import Vector from "../assets/Vector.png";
import pizza from "../assets/pizza.png";
import truck from "../assets/truck.png";

const Page1 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row relative w-full h-full md:w-[1440px] md:h-[804px]">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2">
        <img
          src={truck}
          alt="truck"
          className="absolute w-[107px] h-[83px] top-[33px] left-[100px] md:w-[107px] md:h-[83px] md:top-[33px] md:left-[100px]"
        />

        <div className="absolute w-full h-[207px] top-[227px] left-[100px] md:w-[345px] md:h-[207px] md:top-[227px] md:left-[100px]">
          <h1 className="font-bold text-blue-900 font-sans leading-[69px] text-[4xl] md:text-[60px]">
            Discover the
          </h1>
          <div className="flex">
            <h1 className="font-bold text-red-500 font-sans leading-[69px] mr-4 text-[4xl] md:text-[60px]">
              Best
            </h1>
            <h1 className="font-bold text-blue-900 font-sans leading-[69px] text-[4xl] md:text-[60px]">
              Food
            </h1>
          </div>
          <h1 className="font-bold text-blue-900 font-sans leading-[69px] text-[4xl] md:text-[60px]">
            and Drinks
          </h1>
        </div>

        <div className="absolute w-full h-[55px] top-[460px] left-[100px] md:w-[345px] md:h-[55px] md:top-[460px] md:left-[100px]">
          <p className="font-[400] text-gray-700 text-[lg] leading-[27.41px] md:text-[16.44px] md:leading-[27.41px]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
        </div>

        <div className="absolute w-full h-[63px] top-[556px] left-[97px] md:w-[190px] md:h-[63px] md:top-[556px] md:left-[97px]">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full pl-[34px] pr-[34px] pt-[14px] pb-[14px]">
            Explore Now!
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2">
        {/* Vector Image */}
        <img
          src={Vector}
          alt="Vector"
          className="absolute w-full h-[839px] left-[0] z-10 md:w-[752px] md:h-[839px] md:left-[688px]"
        />

        {/* Pizza Image */}
        <img
          src={pizza}
          alt="pizza"
          className="absolute w-full h-[804px] top-[5px] left-[0] md:w-[735px] md:h-[804px] md:top-[5px] md:left-[705px]"
        />

        <button className="absolute z-20 border-[1px] border-white rounded-full text-white w-[122px] h-[42px] top-[32px] left-[0] md:w-[122px] md:h-[42px] md:top-[32px] md:left-[1277px]">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Page1;
