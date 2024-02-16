import React from "react";
import Image from "next/image";
import House from "../../../public/png/house.png";

function Sample() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-[300px]">Samples</h2>
      <div className="bg-[#212121] w-[90%] mx-auto rounded-md p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          <div className="self-center">
            <p className="text-white text-center text-[22px] font-poppins font-medium">Sample Name</p>
            <p className="text-white text-center text-[22px] font-poppins font-medium mt-2">Description</p>
            <div className="flex justify-center items-center mt-5 mb-4">
              <button className="bg-red w-[130px] h-[49px] rounded-md">View</button>
            </div>
          </div>
          <div>
            <Image className="mx-auto" src={House} />
          </div>
        </div>
      </div>
      {/* ............................ */}

      <div className="bg-[#212121] w-[90%] mx-auto rounded-md p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          <div className="self-center">
            <p className="text-white text-center text-[22px] font-poppins font-medium">Sample Name</p>
            <p className="text-white text-center text-[22px] font-poppins font-medium mt-2">Description</p>
            <div className="flex justify-center items-center mt-5 mb-4">
              <button className="bg-red w-[130px] h-[49px] rounded-md">View</button>
            </div>
          </div>
          <div>
            <Image className="mx-auto" src={House} />
          </div>
        </div>
      </div>
      {/* .................................. */}

      <div className="bg-[#212121] w-[90%] mx-auto rounded-md p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          <div className="self-center">
            <p className="text-white text-center text-[22px] font-poppins font-medium">Sample Name</p>
            <p className="text-white text-center text-[22px] font-poppins font-medium mt-2">Description</p>
            <div className="flex justify-center items-center mt-5 mb-4">
              <button className="bg-red w-[130px] h-[49px] rounded-md">View</button>
            </div>
          </div>
          <div>
            <Image className="mx-auto" src={House} />
          </div>
        </div>
      </div>

    </>
  );
}

export default Sample;
