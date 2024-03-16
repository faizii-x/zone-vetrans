import React from "react";
import Image from "next/image";
import Log from "../../../public/png/log.png";

function SimpleComp() {
  return (
    <>
      <div className="bg-blacks p-4 lg:p-10 mt-6 hide-div-2">
        <h2 className="text-[20px] w-[90%] mx-auto text-white font-poppins font-bold">
          Software and Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[90%] w-full mx-auto container">
          <div className="col-span-1">
            <p className="text-[18px] text-white mt-5 font-poppins font-normal">
              We are experts in assisting construction companies in implementing
              software like Planswift and BlueBeam and tell the employees on how
              to use these programs{" "}
            </p>
          </div>
          <div className="col-span-2 w-[90%] mx-auto">
            <div className=" lg:flex grid justify-between gap-4">
              <div className="lg:w-[70%] w-full">
                <div className="bg-white  rounded-lg p-2 h-auto mb-2">
                  <div className="lg:flex grid justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className=" mx-auto w-[160px] h-[80px]" src={Log} />
                  </div>
                </div>
                {/* ............... */}
                <div className="bg-white shadow-lg rounded-lg p-2 h-auto mb-2">
                  <div className="lg:flex grid justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className=" mx-auto" src={Log} />
                  </div>
                </div>
                {/* ........... */}
                <div className="bg-white shadow-lg rounded-lg p-2 h-auto mb-2 ">
                  <div className="lg:flex grid justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className=" mx-auto" src={Log} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleComp;
