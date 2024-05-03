import React from "react";
import Image from "next/image";
import Single from "../../../public/png/single.png";
import Rooftop from "../../../public/png/rooftop.png";

function  RoofText() {
  return (
    <>    
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Our Clients:
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
      Veterans Estimators is a professional platform to deliver Roofing Estimating Services from last 10 years with different clients. Few of them are as follows:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <li className="text-[22px] font-poppins font-normal mt-1">
            General Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Roofing Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Membrane Roofing Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Shingles Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Steep Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Damp-proofing and Waterproofing Contractors
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Roof Windows and Skylights contractors
          </li>
        
      
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Single} />
        </div>
      </div>
      {/* .................................. */}

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Waterproofing and Damp Proofing Estimating-Material Takeoff
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        Veterans Estimating is a professional platform to deliver Roofing
        Estimating Services from last 10 years with different clients. Few of
        them are as follows:
      </p>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Fireproofing and Fire Stoping Estimating-Material Takeoff
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal mt-3">
            Veterans Estimating is a professional platform to deliver Roofing
            Estimating Services from last 10 years with different clients. Few
            of them are as follows:
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Rooftop} />
        </div>
      </div>
    </>
  );
}

export default RoofText;
