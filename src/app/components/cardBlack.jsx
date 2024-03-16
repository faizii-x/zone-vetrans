import { BLACK_CARDS } from "@/data";
import React from "react";

function CardBlack() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Key Components of General Requirements
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-[90%] mx-auto">
        {BLACK_CARDS.map((x) => (
          <>
            <div className="bg-blacks rounded-lg p-6">
              <h4 className="text-white text-center text-[18px] font-poppins font-semibold">
                {x.heading}
              </h4>
              <p className="text-white text-center text-[16px] font-poppins font-light mt-3">
                {x.para}
              </p>
            </div>
          </>
        ))}
      </div>

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
      Accurate and Transparent Estimation Process
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">An essential requirement for an estimation company is to have a well-defined and transparent estimation process. Clearly communicate to your clients how you arrive at your estimates, including the methodologies, data sources, and assumptions you use. Transparency builds trust and ensures that your clients have a thorough understanding of the estimated costs and timelines associated with their projects.</p>
    </>
  );
}

export default CardBlack;
