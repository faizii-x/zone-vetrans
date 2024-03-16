import React from "react";
import Image from "next/image";
import Floring from "../../../public/png/floring.png";

function FlorEstimate() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Our Flooring Estimates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal mx-auto mt-3">
            Our expert estimators have extensive knowledge of how to estimate
            rapidly to different types of flooring works. It mainly includes the
            following:
          </p>
          <li className="text-[22px] font-poppins font-normal mt-1">
            VCT tiles
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            LVT floors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Carpets</li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Rubber tiling
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Wooden flooring
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Vinyl Flooring
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Dance Flooring
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Leather Flooring
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Fitness Room Flooring and Mats
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Tile Flooring
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Laminate Flooring
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Floring} />
        </div>
      </div>

      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        Our professional Estimators can handle every particular sort of
        projects, either it’s big in size or small. They usually use updated and
        smart software like Plan Swift for estimating. Our Flooring work deals
        with different types of residential and commercial projects that are
        given below.
      </p>
    </>
  );
}

export default FlorEstimate;
