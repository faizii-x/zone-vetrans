import React from 'react'
import Image from "next/image";
import PlanStyle2 from "../../../public/png/planStyle2.png";
import PlanStyle1 from "../../../public/png/planStyle1.png";

function PlanStyle() {
  return (
    <>
      <h2 className="text-[22px] font-bold text-center w-[90%] mx-auto mt-16">
        The Significance Of Effective Planning
      </h2>
    <div className="w-[70%] mx-auto relative show-div-2 ">
        <div className="flex justify-center mt-16 mb-8">
          <Image className="absolute -top-12" src={PlanStyle2} />
          <Image className="" src={PlanStyle1} />
        </div>
      </div>
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6 mx-auto hide-div-2">
        <div className="bg-blacks p-5 mb-3 rounded-md">
          <div className="flex justify-between gap-3">
            <h4 className="text-white text-[18px] font-poppins font-semibold">
              Clear Objectives and Scope Definition
            </h4>
            
          </div>
          <p className="text-white font-poppins font-light mt-3">
            Our team provides high Quality Takeoff Services to many construction
            companies. Our experienced team, equipped with the latest
            technologies and tools, provides fast and accurate quantity takeoff
            numbers for labor and material.
          </p>
        </div>
        <div className="bg-blacks p-5 mb-3 rounded-md">
          <div className="flex justify-between gap-3">
            <h4 className="text-white text-[18px] font-poppins font-semibold">
              Resource Allocation and Optimization
            </h4>
                
          </div>
          <p className="text-white font-poppins font-light mt-3">
            Our team provides high Quality Takeoff Services to many construction
            companies. Our experienced team, equipped with the latest
            technologies and tools, provides fast and accurate quantity takeoff
            numbers for labor and material.
          </p>
        </div>
      </div>
    </>
  )
}

export default PlanStyle