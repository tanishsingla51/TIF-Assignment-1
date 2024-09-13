import React from "react";
import truck from "../assets/truck.png";
import "@fontsource/source-sans-pro";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Page4 = () => {
  return (
    <div className="w-[1440px] h-[362px] top-[2451px] left-[1px] absolute bg-slate-100 flex">
      <img
        src={truck}
        alt="truck"
        className="w-[161px] h-[125px] top-[123px] left-[103px] absolute"
      />

      <div className="w-[232px] h-[186px] top-[116px] left-[474px] absolute ">
        <div className="w-[94px] h-[27px] font-sans">Contact Us</div>
        <p className="w-[217px] h-[69px] mt-3 font-sans text-[14.66px] text-slate-500">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>

        <p className="w-[217px] h-[69px]font-sans mt-3 text-[14.66px] text-slate-500">
          example2020@gmail.com
        </p>

        <p className="w-[217px] h-[69px]  font-sans mt-3 text-[14.66px] text-slate-500">
          (904) 443-0343
        </p>
      </div>

      <div className="w-[438px] h-[186px] top-[116px] left-[898px] absolute flex">
        <div>
          <div className="w-[94px] h-[27px] font-sans">More</div>
          <p className="w-[217px] h-[69px]font-sans  mt-3.5  text-[14.66px] text-slate-500">
            About Us
          </p>

          <p className="w-[217px] h-[69px]font-sans mt-3.5 text-[14.66px] text-slate-500">
            Products
          </p>

          <p className="w-[217px] h-[69px]font-sans mt-3.5 text-[14.66px] text-slate-500">
            Career
          </p>

          <p className="w-[217px] h-[69px]font-sans mt-3.5 text-[14.66px] text-slate-500">
            Contact Us
          </p>
        </div>
        <div>
          <div className="w-[94px] h-[27px] font-sans">Social Links</div>

          <div className="flex">
            <FaInstagram className="text-[25px] text-slate-500 mt-3.5" />
            <FaTwitter className="text-[25px] text-slate-500 mt-3.5 ml-6" />
            <FaFacebookF className="text-[25px] text-slate-500 mt-3.5 ml-6" />
          </div>

          <p
            className="
            w-[217px] h-[69px]  font-sans mt-[86px] text-[14.66px] text-slate-500"
          >
            ">© 2022 Food Truck Example
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
