import { REBAR_CARDS } from "@/data";
import React from "react";
import Image from "next/image";

function BlackRebar() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-[120px] lg:w-[60%] w-[90%] container mx-auto">
        {REBAR_CARDS.map((x) => (
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

      <p className="text-black text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        We will effectively assess your project, point out the schedules that
        can reliably work best for the different construction project, and have
        a quick turnaround time.
      </p>

      <li className="text-[18px] font-medium font-poppins w-[90%] mx-auto mt-3">
        We integrate project management
      </li>
      <li className="text-[18px] font-medium font-poppins w-[90%] mx-auto">
        We insight on how to optimize your schedules
      </li>
      <li className="text-[18px] font-medium font-poppins w-[90%] mx-auto">
        Our weekly, quarterly progress and assessment of projects can get you
        updated about your construction project.
      </li>
    </>
  );
}

export default BlackRebar;
