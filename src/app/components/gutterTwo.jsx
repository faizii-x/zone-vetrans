import { GUTTER_CARDSs } from "@/data";
import React from "react";
import Image from "next/image";
import Money from "../../../public/png/money.png"

function GutterTwo() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Gutter Styles
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto">
        We are efficient enough to deal with all types of Gutter styles for
        gutter estimating services. For example, our gutter cost estimator deals
        with the following styles of gutter for gutter takeoff.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[120px] lg:w-[60%] w-[90%] container mx-auto">
        {GUTTER_CARDSs.map((x) => (
          <>
            <div className="bg-blacks w-full rounded-lg p-6 relative mb-[100px] mx-auto -z-10">
              <div className="bg-white rounded-full p-4 absolute -top-[100px] mx-auto left-[50%] -translate-x-[50%]">
                <Image className="w-[120px] h-[120px]" src={x.img} />
              </div>
              <h4 className="text-white mt-16 font-poppins font-semibold text-[20px] text-center">
                {x.heading}
              </h4>
            </div>
          </>
        ))}
      </div>

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Gutter Costs
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto">
        Our expert gutter cost estimators manage to evaluate your gutter
        installation cost, including its design, material and style. Of course,
        it isn’t simple for any common gutter estimator, but our team of
        well-known gutter estimators manages to select the right type of gutter
        for your home or any commercial building. In addition, we will
        efficiently evaluate different roof slopes to drain off the water from
        the roof, and its different styles will evacuate water from your roof
        and house.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-1 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 ">
        <h2 className="text-[24px] font-bold  mt-6">
        Additional Costs
      </h2>
          <p className="text-[22px] font-poppins font-normal">
            We are here to evaluate certain additional costs of additional
            supplies and gutter parts essential during the installation of
            gutters. Following are the few things that show their involvement
            during gutter installation.
          </p>
          <li className="text-[22px] font-poppins font-medium mt-2">Downspout</li>
          <li className="text-[22px] font-poppins font-medium ">Gutter Guard</li>
          <li className="text-[22px] font-poppins font-medium ">Previous Gutter Removal</li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <Image className="mx-auto" src={Money} />
        </div>
      </div>
    </>
  );
}

export default GutterTwo;
