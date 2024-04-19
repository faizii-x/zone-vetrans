import React from "react";
import Image from "next/image";
import Plumbb from "../../../public/png/plumbb.png";
import Plumbb1 from "../../../public/png/plumbb1.png";

function PlumbSecond() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Commercial Plumbing Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal ">
          At Veterans Estimators, we specialize in swift and accurate commercial plumbing estimates. Understanding the complexity of commercial plumbing, we meticulously itemize all components for multi-floor systems, including pipes, fittings, fixtures, valves, and accessories.
repair of the following systems but are not limited to:
          </p>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Solar Hot Water Heating Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Sewer, Gas & Water Lines
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Commercial HVAC Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Commercial Water Heaters
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Sanitary Plumbing and Drainage
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Sub-Soil Drainage Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Stormwater Discharge
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Water Conservation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Water Filtration</li>
       
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Plumbb} />
        </div>
      </div>
      {/* ...................................... */}

    
      
    </>
  );
}

export default PlumbSecond;
