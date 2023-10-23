import React from "react";

const OurStorySingleForSmall = ({ single }) => {
  const { _id, title } = single;
  return (
    <div>
      <div className=" select-none">
        {/* start */}
        <div className="h-[505px] w-[580px] relative pl-[40px] mb-[60px]">
          <div className="flex justify-between">
            <div className=" w-[500px] h-[340px] overflow-hidden">
              <img
                className="customStoryImg scale-[1.2]"
                src={`https://flux-server-lu38.onrender.com/api/v1/ourstory/story-photo/${_id}`}
                alt=""
              />
            </div>
            <div className="h-[500px] w-[1px] bg-[#302f2f] ml-[40px]" />
          </div>
          <div className=" absolute top-[78%]">
            <h1 className="text-[22px]">{title}</h1>
            {/* <h1 className="text-[17px] font-semibold mt-5">{subtitle}</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySingleForSmall;
