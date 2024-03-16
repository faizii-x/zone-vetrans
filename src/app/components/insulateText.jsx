import React from 'react'
import Image from "next/image";
import Insulateimg from "../../../public/png/insulateimg.png";

function InsulateText() {
  return (
    <>
    
    <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Our Range of Industrial Estimating
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-4">
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
          <Image className="mx-auto" src={Insulateimg} />
        </div>
      </div>
    
    
    
    </>
  )
}

export default InsulateText