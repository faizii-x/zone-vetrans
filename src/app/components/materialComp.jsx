import React from "react";
import Image from "next/image";
import Materiall from "../../../public/png/materiall.png";

function MaterialComp() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] container mt-6 mx-auto">
        Take-Off Formate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <p className="text-[22px] font-poppins font-normal">
            Our work would be in editable excel sheet – if required, we can use
            your template or can put your company details on the
            estimate/proposal. For to do quantities takeoff – we use software
            Planswift, BlueBeam, On Screen Takeoff (OST). Mostly we use
            Planswift. We will be very happy to provide Software files as well
            as Markups/color drawings (if required).
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Materiall} />
        </div>
      </div>
    </>
  );
}

export default MaterialComp;
