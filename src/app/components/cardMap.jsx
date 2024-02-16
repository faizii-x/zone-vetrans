import React from "react";
import Image from "next/image";
import { COST_CARDS } from "@/data";
import Imgg from "../../../public/png/imgg.png"

function CardMap() {
  return (
    <>
      <h2 className="text-[20px] w-[90%] mx-auto font-poppins font-bold mt-16">
        Methods of Cost Estimation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24  w-[90%] container mx-auto">
        {COST_CARDS.map((x) => (
          <>
            <div className="bg-blacks rounded-lg p-4 mb-16">
              <Image className=" mx-auto -mt-16" src={x.img} />
              <h6 className="text-white text-[18px] font-poppins font-bold text-center mt-3">
                {x.heading}{" "}
              </h6>
              <p className="text-white text-[14px] font-poppins font-normal mt-4 text-center">
                {x.para}
              </p>
            </div>
          </>
        ))}
      </div>
      {/* ............................... */}

      <h2 className="text-[20px] w-[90%] mx-auto font-poppins font-bold mt-3">
        Our Approach to Construction Cost Estimation Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            We firmly maintain that a precise forecast serves as a key
            instrument in establishing the budget and managing expenses
            throughout a project's lifespan. Our company initiates the
            estimation procedure with a comprehensive examination of design
            plans, alongside scrutinizing building methods, materials, location,
            permits, logistics, and other elements that expose concealed
            expenses impacting the project's cost prediction. Once our
            industry-specific estimators finalize the quantity assessment, the
            chief estimator verifies the estimate's adherence to standards and
            alignment with project objectives.
          </p>
        </div>
        <Image className=" mx-auto" src={Imgg} />

      </div>
    </>
  );
}

export default CardMap;
