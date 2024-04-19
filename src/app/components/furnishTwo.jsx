import React from "react";
import Image from "next/image";
import Furnishhi from "../../../public/png/furnishhi.png";

function FurnishTwo() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Home Furnishing Estimation Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Our experts provide accurate home furnishing cost estimates tailored
            to your preferences and needs. We consider factors like house size,
            furniture type, and customization options to ensure your
            satisfaction. Plan your budget wisely and prioritize your furnishing
            needs with our customized estimates. Contact us today to get
            started!
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Furnishhi} />
        </div>
      </div>
    </>
  );
}

export default FurnishTwo;
