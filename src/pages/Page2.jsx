import girl from "../assets/girl.png";
import React from "react";
import "@fontsource/source-sans-pro";
import "@fontsource/poppins";

const Page2 = () => {

  return (
    <div className="w-[1440px] h-[653px]">
      <div className="w-[1440px] h-[467px] top-[989px] bg-slate-100 mt-[186px]">
        <img
          src={girl}
          alt="girl"
          className="w-[384px] h-[468px] top-[989px] left-[205px] absolute"
        />
      </div>

      <div className="w-[447px] top-[1096px] h-[191px] left-[789px] absolute">
        <h1 className="text-[45px] font-[600px] text-blue-900 font-poppins leading-[27px]">
          About Us
        </h1>

        <p className="w-[447px] h-[138px] text-slate-500 text-[15px] mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>

        <button className="bg-red-500 text-white rounded-full pl-[34px] pr-[34px] pt-[14px] pb-[14px] mt-6">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Page2;
