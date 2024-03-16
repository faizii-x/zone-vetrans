import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/land.png";
import Land from "../../../public/png/landscape0.png";

function LandText() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Our usage of Plan swift manages to generate exact material lists
            that enclose the number of yards anyone acquires for a city park and
            several feet edging for any residential area. Plan Swift can
            effectively assist through its different tools to measure areas,
            volumes and lengths to follow complex curves with a certain ease. It
            is a useful count tool to evaluate the exact amount of plants to
            order and their placement.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
      {/* .............................. */}
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Our Range Of Landscaping Takeoff Services
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-3">
        Plan hub estimating is a professional platform with the appropriate
        tools to deliver the following range of Landscaping takeoff services.
      </p>
      <li className="text-[22px] font-poppins font-normal mt-4 w-[90%] mx-auto">
        Landscaping estimating
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Hardscape estimating
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Softscape estimating
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Irrigation estimating
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Sprinkler system installation cost estimate
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Drip irrigation cost estimate
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Sprinkler system cost estimate
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Sprinkler estimate
      </li>
      {/* ...................................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-5">
        How To Perform Landscaping Estimating?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Talk to a client
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Effectively estimate an overhead cost
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Reliable estimate materials costs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Estimate a subcontractor cost
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Estimate labor costs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Add a markup
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Calculate the total price
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Land} />
        </div>
      </div>
    </>
  );
}

export default LandText;
