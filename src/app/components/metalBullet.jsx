import React from "react";
import Image from "next/image";
import Met from "../../../public/png/met.png"

function MetalBullet() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto">
        Our Steel Estimating Services Include
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[90%]">
        <div className="col-span-1">
          <li className="text-[22px] font-poppins font-normal mt-3">
            Detailed and accurate steel takeoffs and estimates ranging from
            budget, the order of magnitude, design, and bid estimate.
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Precast estimating
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Cold-form steel estimating
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Steel frames takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Rebar estimating
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Structural steel takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Bar bending schedules
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
          Change order management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-2">
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
