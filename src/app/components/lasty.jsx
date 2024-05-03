import React from "react";
import Mid from "../../../public/png/mid.png";
import Image from "next/image";

function Lasty() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-10">
        What We Estimate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-1 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <h4 className="text-[20px] font-bold mt-1">Specialized Materials</h4>
          <p className="text-[22px] font-poppins font-normal">
            Including strong alloys, customized concrete mixes, and unique
            building materials to match your project's needs.
          </p>

          <h4 className="text-[20px] font-bold mt-1">
            Safety Measures and Compliance{" "}
          </h4>
          <p className="text-[22px] font-poppins font-normal">
            This involves using specialized safety gear, fire control systems,
            and other precautions to meet sector-specific regulations.
          </p>

          <h4 className="text-[20px] font-bold mt-1">Specialized Equipment</h4>
          <p className="text-[22px] font-poppins font-normal">
            This involves the use of heavy machinery, precise instruments, or
            specialized tools required for your unique construction project.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Mid} />
        </div>
      </div>
    </>
  );
}

export default Lasty;
