import React from "react";
import { carVideo } from "../../../assets/Callback";
import "./../Home.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const VideoBannerSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      <div className="customOverlay"></div>
      <div className="-z-10">
        <video
          src={carVideo}
          className="customVideo"
          autoPlay
          loop
          muted></video>
      </div>
      {/* main div */}
      <div className="absolute top-[40%] left-[15%] md:left-[36%] ">
        {/* button section */}
        <div className="text-center">
          <h1 className="text-[34px] font-semibold ml-3 md:text-5xl md:ml-0">
            Flux Technologies
          </h1>
          <div className="flex items-center mt-10 justify-center flex-col md:flex-row">
            <Link to="/village">
              <button className="videoCustomButton z-20">Flux Village</button>
            </Link>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="cursor-pointer  text-[18px] font-semibold mt-[20px] md:ml-7 md:mt-0">
              <h1>Contact now</h1>
              <div
                className={`w-full h-[1px] ${
                  hover ? "bg-[#ddc861]" : "bg-white"
                }`}></div>
            </div>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="absolute top-[80%] w-full text-[#a6a7a6]">
        <div className="grid grid-cols-3 px-[4px] gap-3 md:px-[8%] md:gap-0">
          <div className="text-center  select-none">
            <h1>
              <span className="md:text-xl">
                Official EPA range to <sup>1</sup>{" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">520 mi</h1>
          </div>
          <div className="text-center select-none">
            <h1>
              <span className="md:text-xl">
                starting from <sup>2</sup>{" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">$65,500</h1>
          </div>
          <div className="text-center select-none">
            <h1>
              <span className="md:text-xl">
                Max Power <sup>3</sup>{" "}
              </span>
            </h1>
            <h1 className="text-2xl md:text-[40px] font-semibold">1200+ hp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerSection;
