import React from "react";
import Image from "next/image";
import Aboutimg from "../../../public/png/aboutimg.png"

function AboutComp() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h1 className="text-[34px] font-poppins font-bold mt-[160px]">
          About Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 container mx-auto">
            <div className="col-span-1">
          <p className="text-[22px] font-poppins font-normal">
           <span className="text-red font-bold">Veterans Estimators</span> offers Cost Estimating, Quantities & Material
            Takeoff, and Scheduling services for pirates. Contractors,
            subcontractors, material suppliers, and manufacturers can use our
            services. As we understand each client's unique requirements, our
            experts generate accurate and reliable estimates, eliminating
            alternatives. We have successfully served various developments,
            architectural firms, and contracting companies across America.
          </p>
          </div>
          <Image className="mx-auto" src={Aboutimg} />
        </div>
      </div>
    </>
  );
}

export default AboutComp;
