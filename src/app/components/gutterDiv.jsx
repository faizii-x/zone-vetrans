import { GUTTER_CARDS } from "@/data";
import React from "react";
import Image from "next/image";

function GutterDiv() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[120px] lg:w-[60%] w-[90%] container mx-auto">
        {GUTTER_CARDS.map((x) => (
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
    </>
  );
}

export default GutterDiv;
