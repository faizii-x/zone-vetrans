import { SCHEDULE_CARDS } from "@/data";
import React from "react";
import Image from "next/image";

function ScheduleCards() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[120px] w-[60%] container mx-auto">
        {SCHEDULE_CARDS.map((x) => (
          <>
            <div className="bg-blacks rounded-lg p-6 relative mb-[100px]">
              <div className="bg-white rounded-full p-4 absolute -top-[100px] mx-auto left-[50%] -translate-x-[50%]">
                <Image className="" src={x.img} />
              </div>
              <h4 className="text-white mt-16 font-poppins font-semibold text-[20px] text-center">
                {x.heading}
              </h4>
              <p className="text-white font-poppins font-light mt-3 text-[16px] text-center">
                {x.para}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ScheduleCards;
