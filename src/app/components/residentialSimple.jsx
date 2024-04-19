import React from "react";
import Image from "next/image";
import Risk from "../../../public/png/risk.png";

function ResidentialSimple() {
  return (
    <>
     
     

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        Why Choose Planhub Estimators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
          Detailed estimates with a high emphasis on accuracy
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Cost-effective solutions at market competitive rates (check prices)
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Faster and timely delivery of estimates so you meet your deadlines
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Reduce overheads and only pay us when you need us
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Increase efficiency and get more jobs by bidding on more projects
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Consultation on smartly filing bids to acquire more project
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Help you Increase your bid-hit ratio and win more bids
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          24/7 chat & email support
          </li>
         
          
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Risk} />
        </div>
      </div>
    </>
  );
}

export default ResidentialSimple;
