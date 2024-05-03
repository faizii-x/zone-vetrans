import React from "react";
import Image from "next/image";
import Insulateimg from "../../../public/png/insulateimg.png";

function InsulateText() {
  return (
    <>
      <h2 className="text-[26px] font-bold w-[90%] mx-auto mt-10">
        Our Insulation Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Residential & Commercial Insulation Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Industrial Mechanical Insulation Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Thermal Insulation Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Fireproofing & Firestopping Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Roofing Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Waterproofing & Dampproofing Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Acoustic & Sound Proofing Estimation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Estimation of Insulation for boilers, HVAC systems, ductwork,
            pipeworks, valves, plumbing, equipment, etc.
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Material Takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Budget Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bid Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bidding Assistance
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Change Order Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Preliminary Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Pre-built Material Estimate
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Project Cost Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Value Engineering
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Insulateimg} />
        </div>
      </div>
    </>
  );
}

export default InsulateText;
