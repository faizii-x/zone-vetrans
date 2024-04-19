import React from "react";
import Image from "next/image";
import Callcost from "../../../public/png/callcost.png";

function CallNow() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 w-[90%] mx-auto container">
        <div className="col-span-2 mx-auto">
          <div className="border border-black w-full rounded-3xl lg:p-16 p-11">
            <p className="text-black text-[22px] font-poppins font-bold">
              Call us now
            </p>
            <p className="text-black sm:text-[18px] text-[14px] font-poppins font-medium">
              For a quick quote based on your project scope, call us at{" "}
              <a
                className="underline  font-bold hover:text-red"
                href="tel:+1 917 300 1079"
              >
                {" "}
                +1 917 300 1079{" "}
              </a>
              or email us at{" "}
              <a
                className="underline  font-bold hover:text-red"
                href="mailto:someone670@gmail.com"
              >
                {" "}
                Dave@procoreestimators.com{" "}
              </a>
            </p>

            <div className="mt-8 bg-blacks w-[160px] h-[60px] rounded-lg flex justify-center items-center cursor-pointer hover:bg-black">
            <a
                className="underline  font-bold hover:text-red"
                href="tel:+1 917 300 1079"
              >
              <button className="text-[16px] text-white font-poppins font-bold">Call Us</button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <div className="bg-blacks w-full rounded-3xl p-1 ">
            <Image className="w-[90%] h-[300px] mx-auto" src={Callcost} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CallNow;
