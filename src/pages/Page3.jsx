import React from "react";
import tomato from "../assets/tomato.png";
import meal from "../assets/meal.png";
import meal1 from "../assets/meal1.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import corn from "../assets/corn.png";
import supreme from "../assets/supreme.png";
import brocolli from "../assets/brocolli.png";
import { useState } from "react";

const Page3 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleLeftArrowClick = () => {
    if (currentPage - 1 >= 1) 
      setCurrentPage(currentPage - 1);
  };

  const handleRightArrowClick = () => {
    if(currentPage + 1 <= 2)
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="w-[1225px] h-[679px] top-[1614px] left-[108px] absolute ">
      <h1 className="text-[45px] font-[600px] text-blue-900 font-poppins leading-[27px]">
        Latest Articles
      </h1>

      {currentPage === 1 && (
        <div className="grid grid-cols-3">
          <div className="w-[381px] h-[554px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={tomato}
              alt="tomato"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              Grilled Tomatoes at Home
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>

          <div className="w-[381px] h-[554px] left-[422px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={meal}
              alt="meal"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              GSnacks for Travel
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>

          <div className="w-[381px] h-[554px] left-[844px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={meal1}
              alt="meal1"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              Post-workout Recipes
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>
        </div>
      )}

      {currentPage == 2 && (
        <div className="grid grid-cols-3">
          <div className="w-[381px] h-[554px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={corn}
              alt="corn"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              How To Grill Corn
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>

          <div className="w-[381px] h-[554px] left-[422px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={supreme}
              alt="supreme"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              Crunchwrap Supreme
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>

          <div className="w-[381px] h-[554px] left-[844px] top-[125px] absolute border-[1px] rounded-2xl ">
            <img
              src={brocolli}
              alt="brocolli"
              className="w-[326px] h-[257px] top-[0px] absolute rounded-xl left-6 top-6"
            />

            <h1 className="text-[21px] font-[900px] text-blue-900 font-poppins leading-[27px] top-[300px] left-[35px] w-[285px] h-[27px] absolute">
              Broccoli Cheese Soup
            </h1>

            <p className="text-[15px] text-slate-500 top-[340px] left-[35px] w-[295px] absolute">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>

            <button className=" border-[1px] border-slate-600 text-slate-800 rounded-full pl-[26px] pr-[26px] pt-[3px] pb-[3px] h-[42px] w-[131px] top-[470px] left-[35px] absolute">
              Read More
            </button>
          </div>
        </div>
      )}

      <button className="top-[730px] left-[555px] w-[28px] h-[29px] border-[1px] border-slate-300 rounded-md flex absolute">
        <img
          src={left}
          alt="left"
          className="w-[10px] h-[16px] left-2 top-1 absolute"
          onClick={handleLeftArrowClick}
        />
      </button>

      {currentPage === 1 && (
        <div className="top-[730px] left-[599px] w-[28px] h-[29px]  flex absolute">
          1/2
        </div>
      )}

      {currentPage === 2 && (
        <div className="top-[730px] left-[599px] w-[28px] h-[29px]  flex absolute">
          2/2
        </div>
      )}

      <button className="top-[730px] left-[641px] w-[28px] h-[29px] border-[1px] border-slate-300 rounded-md flex absolute">
        <img
          src={right}
          alt="right"
          className="w-[10px] h-[16px] left-2 top-1 absolute"
          onClick={handleRightArrowClick}
        />
      </button>
    </div>
  );
};

export default Page3;
