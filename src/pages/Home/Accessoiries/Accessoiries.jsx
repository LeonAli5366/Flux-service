import React from "react";
import { solarCar } from "../../../assets/Callback";
import "./../Home.scss";
import { Link } from "react-router-dom";

const Accessoiries = () => {
  return (
    <div className="bg-black">
      <h1 className="text-2xl font-semibold text-center text-[#ddc862] pt-[50px]">
        Accessoiries
      </h1>
      <div className="pt-[90px] w-[65%] mx-auto md:w-[20%]">
        <img src={solarCar} alt="" />
      </div>
      <Link to='/store'><div className="text-center pb-16">
        <button className="customAccessoiriesButton   mx-auto mt-[70px] md:mt-[90px]">
          SHOP NOW
        </button>
      </div>
      </Link>
      
    </div>
  );
};

export default Accessoiries;
