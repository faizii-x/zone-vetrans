import React from "react";
import Image from "next/image";
import Slide5 from "../../../public/png/siteimg1.png";

function SiteCommon() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="text-[26px] font-bold mt-6">
          Our Deliverables for Sitework Estimating Services Include
        </h2>

        <li className="text-[22px] font-poppins font-normal mt-3">
          Cut & Fill Takeoff list with takeoff summary
        </li>
        <li className="text-[22px] font-poppins font-normal mt-1">
          Earth Volumes, quantities, and section
        </li>
        <li className="text-[22px] font-poppins font-normal mt-1">
          Surface Grading
        </li>
        <li className="text-[22px] font-poppins font-normal mt-1">
          Landscaping estimate with soil volumes (Hardscape, Softscape &
          Irrigation)
        </li>

        {/* ................................................ */}

        <h2 className="text-[26px] font-bold mt-6">
          Scope Of Work In Our Sitework Estimating Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto">
          <div className="col-span-1">
            <li className="text-[22px] font-poppins font-normal mt-3">
              Clearing & Demolition
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Earthwork
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Grading
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Drainage
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Utility Spoils
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Storm Sewer
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Water distribution
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Roadways
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Sidewalk
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Driveways
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Pavements
            </li>
          </div>
          <div className="col-span-1">
            <li className="text-[22px] font-poppins font-normal mt-3">
              Site Furnishing
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Concrete Flatwork
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Retaining Walls
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Climbing Walls
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Fences & Gates
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Landscaping
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Irrigation
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Fountains
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">Patio</li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Gabions
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1 mb-2">
              Docks
            </li>
          </div>
          <div className="col-span-1 self-center">
            <Image className="mx-auto" src={Slide5} />
          </div>
        </div>

        <h2 className="text-[26px] font-bold mt-6">
          Earth Work Estimating Services
        </h2>
        <p className=" text-[22px] font-poppins font-normal mt-2">
          For excavators, site engineers, and specialized contractors,
          determining the cost of land preparation is essential before starting
          construction. At{" "}
          <span className="text-red font-semibold">Veterans Estimators</span>,
          we provide accurate earthwork estimates to meet deadlines. Our team
          ensures that all elevation points, ridges, swales, breaklines, hooks,
          wall heights, and pad heights are included in our quantity takeoffs.
          Our earthwork estimates cover:
        </p>
      </div>
    </>
  );
}

export default SiteCommon;
