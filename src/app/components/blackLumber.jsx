import { LUMBER_CARDS } from "@/data";
import React from "react";
import Image from "next/image";
import Lumbe from "../../../public/png/lumbe.png"

function BlackLumber() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Our Range Of Lumber Estimating
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[120px] lg:w-[60%] w-[90%] container mx-auto">
        {LUMBER_CARDS.map((x) => (
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
      Wood and Plastic Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            We pride ourselves on delivering comprehensive estimating services
            tailored specifically for wood and plastic projects. Our experienced
            team meticulously assesses project requirements to provide precise
            material takeoffs, covering every aspect from lumber to plastic
            materials. Our bid estimates are detailed and thorough, taking into
            account factors such as project scope, timeline, and budget
            constraints. Whether you're planning a wood construction project or
            need accurate estimates for plastic fabrication, our services ensure
            that you have the essential insights and cost breakdowns to make
            informed decisions and achieve successful project outcomes.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <Image className="mx-auto" src={Lumbe} />
        </div>
      </div>
    </>
  );
}

export default BlackLumber;
