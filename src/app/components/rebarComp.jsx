import React from "react";
import Image from "next/image";
import Steel from "../../../public/png/steel.png";

function RebarComp() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] container mx-auto mt-6">
        Our Expertise In Rebar Detailing
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] container mx-auto">
        <div className="mx-auto mt-2">
          <p className="text-[22px] font-poppins font-normal">
            We show our expertise in the following trades of Rebar detailing
            services
          </p>
          <li className="text-[18px] font-medium font-poppins mt-2">
            Rebar shop drawings
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Bar listing in ASA format
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Foundation details
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Footing detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Total rebar estimation
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Bar bending schedules
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Roof truss and joint details
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Retaining walls detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Concrete masonry detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Quality takeoffs and as-built drawings
          </li>
        </div>

        <div className="self-center">
          <Image className="mx-auto" src={Steel} />
        </div>
      </div>

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        Distinctive Prospects Of Rebar Estimating
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-1">
        Our estimates give you all the data you need for rebar forecasting. We
        minimize waste and identify key accessories, ensuring a smooth
        fabrication process. With error-free bar bending schedules, we help you
        avoid costly rework.
      </p>
      <li className="text-[18px] font-medium font-poppins mt-2 w-[90%] mx-auto">
        Comprehensive estimation summary according to client’s requirement
      </li>
      <li className="text-[18px] font-medium font-poppins mt-1 w-[90%] mx-auto">
        Rebar take off summary
      </li>

      <li className="text-[18px] font-medium font-poppins mt-1 w-[90%] mx-auto">
        A comprehensive list of different accessories that includes chairs,
        bolsters, wire mesh, ex
      </li>
      <li className="text-[18px] font-medium font-poppins mt-1 w-[90%] mx-auto">
        The output itself into MS excel, Soule estimation formats, ASA
        estimation
      </li>
      {/* ............................... */}

      
   
    </>
  );
}

export default RebarComp;
