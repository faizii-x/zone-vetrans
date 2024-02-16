"use client";
import React, { useState } from "react";
import Image from "next/image";
import Log from "../../../public/png/log.png";

function CompSlider() {
  const [customSlider, setCustomSlider] = useState("left-16 linear-class");
  const [secondCall, setSecondCall] = useState(" left-8 linear-class");
  const [clickCheck, setClickCheck] = useState(0);

  const handleChange = () => {
    if (clickCheck === 0) {
      setCustomSlider("left-[900px] linear-class");
      setClickCheck(1);
    } else if (clickCheck === 1) {
      setSecondCall("left-[1000px] linear-class");
      setCustomSlider("left-[900px] linear-class");
      setClickCheck(0);
    }
  };

  const handleReverse = () => {
    if (clickCheck === 1) {
      setCustomSlider("left-[40px] linear-class");
      setClickCheck(0);
    } else if (clickCheck === 0) {
      setSecondCall("left-[20px] linear-class");
      setClickCheck(1);
    }
  };

  return (
    <>
      <div className="bg-blacks p-10 mt-6 show-div-2">
        <h2 className="text-[20px] w-[90%] mx-auto text-white font-poppins font-bold">
          Software and Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto container">
          <div className="col-span-1">
            <p className="text-[18px] text-white mt-5 font-poppins font-normal">
              We are experts in assisting construction companies in implementing
              software like Planswift and BlueBeam and tell the employees on how
              to use these programs{" "}
            </p>
          </div>
          <div className="col-span-2 w-[90%] relative">
            <div className=" lg:flex grid justify-between gap-4">
              <div className="w-[70%]">
                <div className="bg-white boxShadow rounded-lg p-2 h-[150px]">
                  <div className="flex justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className="mx-auto w-[100px] h-[100px] self-center" src={Log} />
                  </div>
                </div>
                {/* ............... */}
                <div
                  className={`bg-white shadow-lg rounded-lg p-2 h-[170px] w-[80%] absolute -top-3 ${secondCall}`}
                >
                  <div className="flex justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className="mx-auto w-[100px] h-[100px] self-center" src={Log} />
                  </div>
                </div>
                {/* ........... */}
                <div
                  className={`bg-white shadow-lg rounded-lg p-2 h-[190px] w-[80%] linear-class absolute -top-5 ${customSlider}`}
                >
                  <div className="flex justify-start gap-2">
                    <div>
                      <h4 className=" text-[18px] font-poppins font-bold  mt-3">
                        PLANSWIFT
                      </h4>
                      <p className=" text-[14px] font-poppins font-normal mt-4 ">
                        The PlanSwift software was specifically designed for the
                        construction industry, but it is not limited to it.
                      </p>
                    </div>
                    <Image className="mx-auto w-[100px] h-[100px] self-center" src={Log} />
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  onClick={handleChange}
                  className="bg-white hover:bg-red hover:text-white w-[30px] h-[30px] flex justify-center cursor-pointer items-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div
                  onClick={handleReverse}
                  className="bg-white mt-2 hover:bg-red hover:text-white w-[30px] h-[30px] flex justify-center cursor-pointer items-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompSlider;
