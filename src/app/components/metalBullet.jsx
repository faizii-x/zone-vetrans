import React from "react";
import Image from "next/image";
import Met from "../../../public/png/met.png"

function MetalBullet() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto">
        Our steel estimating services include
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[90%]">
        <div className="col-span-1">
          <li className="text-[22px] font-poppins font-normal mt-3">
            Detailed and accurate steel takeoffs and estimates ranging from
            budget, the order of magnitude, design, and bid estimate.
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Precast estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Cold-form steel estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Steel frames takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Rebar estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Structural steel takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Bar bending schedules
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Change order management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-3">
          Rebar project management
          </li>
        </div>
        <div className="col-span-1 self-center">
        <Image className="mx-auto" src={Met} />

        </div>
      </div>
    </>
  );
}

export default MetalBullet;
