import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png";

function ResidentialSimple() {
  return (
    <>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Veterans Estimating is best in the business with seasoned, expert
        estimators for residential construction estimating services of your
        project. After the thorough analysis of plans, we digitally takeoff the
        quantities using the latest software and consult our construction cost
        database and RSMeans for zip-code pricing on your residential estimate.
        We perform the breakdown of labor costs with respect to union and
        prevailing wages including standard time and overtime. The bill of
        material is listed in CSI MasterFormat division wise or by the pattern
        of CSI costs in EXCEL spreadsheets so that you can easily review and
        send it to your vendors for pricing.
        <br /> Our deliverables of residential construction estimating services
        include:
      </p>
      <li className="text-[22px] font-poppins font-normal mt-4 w-[90%] mx-auto">
        Residential Detailed Estimate tailored to your specific needs being a
        contractor, home builder, owner for bidding, procurement, budgeting and
        financing purposes.
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Digital Takeoff EXCEL files
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Material Types & Quantities
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Material & Labor Costs
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Coloured Marked up Plans
      </li>
      <li className="text-[22px] font-poppins font-normal mt-1 w-[90%] mx-auto">
        Complete Takeoff Summary containing labor hours, permits, taxes,
        contingencies, overheads, profit percentages and various other costs
      </li>
      {/* ...................................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Why Choose Planhub Estimators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Comprehensive quantity takeoffs and cost estimates for all divisions
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Estimates for quality assurance and quality control
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Expert eye witnesses
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Cold eyes reviews
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bid Evaluation & Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Procurement Services
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Change Order Preparation & Review
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Feasibility Studies
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Risk Analysis
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Productivity Analysis
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Project Scheduling
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Project Cost Management
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default ResidentialSimple;
