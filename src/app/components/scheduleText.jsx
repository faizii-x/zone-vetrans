import React from "react";
import Image from "next/image";
import Schedule1 from "../../../public/png/schedule1.png";
import Image1 from "../../../public/png/image1.png";
import Image2 from "../../../public/png/image2.png";

function ScheduleText() {
  return (
    <>
      <h2 className="w-[90%] mx-auto text-[30px] font-bold mt-6">
        Maintaining
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            While creating a project schedule, data is gathered from multiple
            sources. Submission guidelines stem from the specifications and
            additional contractual materials. Installation processes and
            interactions are ascertained from the estimate and contract papers.
            Workforce allocation, timeframes, and cost-related details for the
            schedule are extracted from the estimation. Furthermore, the
            project's management and supervisory staff contribute to the
            schedule development process.
          </p>
        </div>
        <div className="col-span-1">
          <Image className="mx-auto" src={Schedule1} />
        </div>
      </div>
      {/* ................................. */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2 w-[90%] mx-auto">
        <div className="col-span-1">
          <h3 className="text-[30px] font-bold mt-6">Scheduling Software</h3>
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
