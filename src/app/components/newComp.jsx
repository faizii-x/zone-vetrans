import React from "react";
import Image from "next/image";
import New from "../../../public/png/new.png";
import Link from "next/link";

function NewComp() {
  return (
    <>
      <div className="bg-[#212121] lg:p-4 p-2 lg:w-[80%] w-[90%] mx-auto mt-[290px] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
          <div className="col-span-2">
            <h2 className="text-[28px] font-poppins text-white font-bold w-[90%] mx-auto">
              NEW YORK CONSTRUCTION ESTIMATING SERVICES
            </h2>
            <div className="w-[90%] mx-auto mb-4">
              <p className=" text-white font-medium text-[20px] font-poppins">
                If you are planning to get the Construction Estimating services
                in New York, then you should contact{" "}
                <span className="text-red">Veterans Estimators</span>
              </p>
              <Link href="/nyc">
              <div className="lg:w-[20%] md:w-[30%] w-[50%] hover:bg-red cursor-pointer p-2 flex justify-center items-center border rounded-lg mt-4">
                <button className="text-[16px] font-poppins text-white">
                  Read More
                </button>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
            <Image className=" mx-auto " src={New} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewComp;
