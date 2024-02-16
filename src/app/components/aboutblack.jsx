import React from "react";
import Image from "next/image";
import About1 from "../../../public/png/about1.png";
import About2 from "../../../public/png/about2.png";

function Aboutblack() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="bg-blacks rounded-lg mt-8 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
            <div className="col-span-1 mx-auto">
              <Image className="" src={About1} />
            </div>
            <div className="col-span-2 self-center">
              <h3 className="text-white text-[24px] font-poppins font-bold">
                Our Mission
              </h3>
              <p className="text-[18px] font-light text-white">
                Our vision is to build and maintain a successful business
                relationship which includes providing uncompromising quality,
                reliable accuracy, and fast turnaround time to General
                Contractors, Home Builders, Subcontractors, Architects,
                Developers, and Home Owners
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ................................................ */}

      <div className="w-[90%] mx-auto">
        <div className="bg-blacks rounded-lg mt-8 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
            <div className="col-span-2 self-center">
              <h3 className="text-white text-[24px] font-poppins font-bold">
                Our Vision
              </h3>
              <p className="text-[18px] font-light text-white">
                We are driven by the goal of establishing and nurturing
                enduring, fruitful business connections with our clients. We
                achieve this by ensuring their complete contentment in terms of
                Turnaround time, Price, and above all, consistent Accuracy. If
                you're interested in discovering more about our services,
                industry background, and examples of our work, please don't
                hesitate to inquire.
              </p>
            </div>
            <div className="col-span-1 mx-auto">
              <Image className="" src={About2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutblack;
