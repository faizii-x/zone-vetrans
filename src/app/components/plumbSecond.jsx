import React from "react";
import Image from "next/image";
import Plumbb from "../../../public/png/plumbb.png";
import Plumbb1 from "../../../public/png/plumbb1.png";

function PlumbSecond() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Commercial Plumbing Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal ">
            Veterans Estimators estimating stands out when it comes to
            super-fast and precise commercial plumbing estimating services. We
            totally understand the complexity of the job of commercial plumbers
            as it involves more complicated and integrated plumbing systems,
            therefore we carefully itemize all the components such as pipes,
            fittings, fixtures, valves, and various other accessories for
            multiple floors. With the skill and expertise to estimate all sizes
            and types of plumbing works, we offer our services for the new
            installation, addition, and repair of the following systems but are
            not limited to:
          </p>
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
          <li className="text-[22px] font-poppins font-normal mt-1">
            Dust smoke detector
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Pump</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Louver</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Ducts</li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Plumbb} />
        </div>
      </div>
      {/* ...................................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Industrial Estimating Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal ">
            Whether installing a plumbing system in a new or existing industrial
            facility, we provide a full range of estimating services to
            industrial piping and plumbing contractors. Our team of certified
            MEP estimators handle even the most complex plumbing systems and
            effectively quantify all the pipe, fittings, fixtures, flanges,
            valves, accessories, and equipment to come up with the accurate cost
            estimate. We have performed cost evaluations for the wide scope of
            industrial plumbing projects in Chemical processing, Refinery, Power
            plants, Paper mills, Food and beverage, Brewing plants,
            CO-Generation, Aerospace manufacturing, Bio-fuels, and Wastewater
            treatment plants We have delivered estimates to the contractors
            involved in the installation, service, maintenance, and repair of
            the following plumbing systems:
          </p>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Industrial Gas Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Steam & Condensate Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Compressed Air Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Hot & Chilled Water Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Potable & Non-potable Water Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Sewer & Wastewater Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Process Cooling & Heating Systems
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Plumbb1} />
        </div>
      </div>
    </>
  );
}

export default PlumbSecond;
