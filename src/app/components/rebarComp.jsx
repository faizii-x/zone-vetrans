import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png";

function RebarComp() {
  return (
    <>
      <h2 className="text-[22px] font-bold w-[90%] container mx-auto mt-6">
        Our Expertise In Rebar Detailing
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] container mx-auto">
        <div className="mx-auto mt-6">
          <p className="text-[22px] font-poppins font-normal">
            We show our expertise in the following trades of Rebar detailing
            services
          </p>
          <li className="text-[18px] font-medium font-poppins mt-2">
            Rebar shop drawings
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Bar listing in ASA format
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Foundation details
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Footing detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Total rebar estimation
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Bar bending schedules
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Roof truss and joint details
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Retaining walls detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Concrete masonry detailing
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Quality takeoffs and as-built drawings
          </li>
        </div>

        <div className="self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        Distinctive Prospects Of Rebar Estimation
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        Our comprehensive estimates cover all the required data through a sales
        estimator that can effectively assist in forecasting the rebar
        requirements for a fabrication shop. Our estimating is accurate and
        helpful in eliminating waste and spot the crucial accessories during the
        whole fabrication process. Our expert rebar estimator fully understands
        the meaning and importance of producing an error-free bar bending
        schedule that can easily fit into the concrete framework to avoid rework
        and cost overruns.
      </p>
      <li className="text-[18px] font-medium font-poppins mt-2 w-[90%] mx-auto">
        Comprehensive estimation summary according to client’s requirement
      </li>
      <li className="text-[18px] font-medium font-poppins mt-1 w-[90%] mx-auto">
        Rebar take off summary
      </li>

      <li className="text-[18px] font-medium font-poppins mt-1 w-[90%] mx-auto">
        A comprehensive list of different accessories that includes chairs,
        bolsters, wire mesh, ex
      </li>
      {/* ............................... */}

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        Our Range Of Rebar Estimation
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <p className="text-[22px] font-poppins font-normal">
            We can estimate your entire project for you based on your LOCAL
            PRICING so the numbers will be accurate. We can estimate your entire
            project for you based on your LOCAL PRICING so the numbers will be
            accurate. We can estimate your entire project for you based on your
            LOCAL PRICING so the numbers will be accurate.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default RebarComp;
