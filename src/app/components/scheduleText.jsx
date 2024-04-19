import React from "react";
import Image from "next/image";
import Schedule1 from "../../../public/png/schedule1.png";
import Image1 from "../../../public/png/image1.png";
import Image2 from "../../../public/png/image2.png";

function ScheduleText() {
  return (
    <>
      <h2 className="w-[90%] mx-auto text-[22px] font-bold mt-6">
        Maintaining
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            When creating a project timeline, we gather information from
            multiple sources, including contract documents and quotations. We
            determine installation procedures, labor assignments, durations, and
            financial details based on this data. Our management team oversees
            the entire process to ensure accuracy and efficiency.
          </p>
        </div>
        <div className="col-span-1">
          <Image className="mx-auto" src={Schedule1} />
        </div>
      </div>
      {/* ................................. */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2 w-[90%] mx-auto">
        <div className="col-span-1">
          <h3 className="text-[22px] font-bold mt-6">Scheduling Software</h3>
          <p className="text-[22px] font-poppins font-normal">
            Our expert team is proficient in developing and monitoring schedules
            with the following construction consulting software:
          </p>
        </div>
        <div className="col-span-1 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-blacks p-6 rounded-lg">
              <Image className="mx-auto" src={Image1} />
              <p className="text-white text-[16px] font-poppins font-normal text-center mt-3">
                Microsoft Project
              </p>
            </div>
            <div className="bg-blacks p-6 rounded-lg">
              <Image className="mx-auto" src={Image2} />
              <p className="text-white text-[16px] font-poppins font-normal text-center mt-3">
                Primavera P6
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleText;
