import React from 'react'
import Image from "next/image";
import Plumm from "../../../public/png/plumm.png";


function LumberText() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
          We have an experienced lumber estimator who's worked with many contractors in North America. Our team follows strict guidelines from certified organizations like AACE and AIQS. They carefully examine your plans and provide detailed estimates for all wood components, ensuring accuracy and reliability in our wood-plastic composites estimates.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Plumm} />
        </div>
      </div>
    
    
    </>
  )
}

export default LumberText