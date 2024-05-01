import React from "react";
import Image from "next/image";
import Pro from "../../../public/png/pro.png";
import Mann from "../../../public/png/mann.png";
import NySlide from "../components/nySlide";

function Page() {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[160px]">
        <h2 className="text-[28px] font-poppins text-black font-bold ">
          CONSTRUCTION ESTIMATING SERVICES NYC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mx-auto">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image className=" mx-auto " src={Pro} />
          </div>
          <div className="col-span-2">
            <p className="text-[20px] font-poppins font-normal ">
              If you're seeking Construction Estimating services NYC, then you
              should consider contacting{" "}
              <span className="text-red">Veterans Estimators</span>!<br />
              .Our skilled team provides detailed estimates for construction
              costs, covering all expenses. we excel in projects of any size,
              type, or complexity, including single-family residential,
              high-rise residential, commercial, retail, medical centers,
              institutional, industrial, marine, and mining projects.
              <br />
              <span className="text-red">Veterans Estimators</span> is equipped
              with the latest estimating software such as Planswift, Bluebeam,
              ON SCREEN TAKEOFF. Our cost estimates are meticulously prepared
              using on-screen takeoff software to measure quantities accurately
              and RSMeans for costing. Reach out to us today for reliable
              construction estimating services!
            </p>
          </div>
        </div>

        {/* .................................. */}
      </div>
      <NySlide />
      <h2 className="text-[24px] font-poppins text-black font-semibold w-[90%] mx-auto mt-8">
        LIST OF OUR CLIENTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-3 w-[90%]">
        <div>
          <li className="text-[18px] font-poppins font-semibold">
            GENERAL CONTRACTORS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            SUBCONTRACTORS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            PROJECT MANAGERS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            INVESTORS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            ARCHITECTS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            HOME BUILDERS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            OWNERS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            DEVELOPERS
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-1">
            VENDORS
          </li>
        </div>
        <div>
          <Image className="mx-auto" src={Mann} />
        </div>
      </div>
    </>
  );
}

export default Page;
