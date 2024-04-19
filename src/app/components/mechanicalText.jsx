import React from "react";
import Image from "next/image";
import Hye from "../../../public/png/hye.png";
import Mech from "../../../public/png/mech.png";

function MechanicalText() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        What Do We Quantify In Mechanical Takeoffs?
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        We have a team of specialized mep estimators who have the expertise in
        using the latest mechanical takeoff software like PLANSWIFT, BLUEBEAM,
        ONE SCREEN TAKEOFF, etc. Following items are generally quantified in our
        mechanical takeoffs:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air devices
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air handling units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air-cooled condensing units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air conditioning units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Exhaust fans
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Manual volume damper
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Rooftop units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Dust smoke detector
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Pump</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Louver</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Ducts</li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Vent pipes
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Refrigerate pipes
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Mech} />
        </div>
      </div>
      {/* ................................... */}

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Mechanical Piping Estimating
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        MEP Piping Estimation Services: As a leading team in MEP estimation, we
        specialize in providing highly accurate estimates for mechanical piping
        contractors. Our detailed estimations support bid submissions, budget
        planning, procurement, and project scheduling. With hands-on experience
        in commercial and industrial projects across various sectors, including
        petrochemical, pharmaceutical, and power generation, we excel in
        analyzing costs for piping projects of any size or complexity. Our
        portfolio includes estimation solutions for a wide range of mechanical
        piping systems. We have the portfolio of providing estimating solutions
        for the following mechanical piping systems:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-1 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
          HVAC piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Power boilers
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Process piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Hydraulic piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Control piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Gas piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Utility piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Power plant piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Steel mill piping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Prefabricated piping systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Pre insulated piping systems
          </li>
          
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Hye} />
        </div>
      </div>
    </>
  );
}

export default MechanicalText;
