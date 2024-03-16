import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png";

function SecondCommercial() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Our Range of Industrial Estimating
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Comprehensive quantity takeoffs and cost estimates for all divisions
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Estimates for quality assurance and quality control
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Expert eye witnesses
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Cold eyes reviews
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bid Evaluation & Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Procurement Services
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Change Order Preparation & Review
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Feasibility Studies
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Risk Analysis
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Productivity Analysis
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Project Scheduling
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Project Cost Management
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>

      {/* ........................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
      Industrial Structural Steal Estimating
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        With the team of estimators and engineers skilled in steel estimation,
        we have successfully catered many structural steel contractors and
        design firms involved in the steel erection for multi-story buildings
        and industrial facilities. By employing the best estimating practices,
        our estimators prepare the accurate structural steel estimates that not
        only help in planning, bidding, procurement, but also minimize wastages
        that contribute to the green environment. Our takeoffs contain the
        detailed breakdown of all the structural steel design components such as
        channels, beams, angles, plates, connectors and other accessories to
        give you a clear picture of costs involved in your project.
        <br /> We generally quantify the following components:
      </p>
      <li className="text-[22px] font-poppins font-normal mt-4 w-[90%] mx-auto">
        Rebar
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Piping
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Roofing
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Siding
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Louvers
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Platforms
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Railings
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Ladders
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Gratings
      </li>
    </>
  );
}

export default SecondCommercial;
