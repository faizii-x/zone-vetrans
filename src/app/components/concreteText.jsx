import React from "react";
import Image from "next/image";
import Conc from "../../../public/png/conc.png";

function ConcreteText() {
  return (
    <>
      <h2 className="text-[30px] font-bold mt-6 w-[90%] mx-auto">
        Our Portfolio In Concrete Takeoff Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto w-[90%] ">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">Dams</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Bridges</li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Residential Buildings
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Commercial Buildings
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Foundations For High Rise Buildings
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Highways
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Driveways
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Culverts And Sewers
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Fences</li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Conc} />
        </div>
      </div>

      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto">
        From big construction companies to small businesses, we have served many
        general contractors, concrete contractors, asphalt contractors,
        foundation contractors, vendors, and pavers with the most accurate and
        highly detailed concrete estimating services and material takeoffs
        services.
      </p>
    </>
  );
}

export default ConcreteText;
