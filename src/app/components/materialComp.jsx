import React from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png"

function MaterialComp() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] container mt-6 mx-auto">
        Take-Off Formate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2 mb-3">
          <p className="text-[22px] font-poppins font-normal">
            We can estimate your entire project for you based on your LOCAL
            PRICING so the numbers will be accurate. We can estimate your entire
            project for you based on your LOCAL PRICING so the numbers will be
            accurate. We can estimate your entire project for you based on your
            LOCAL PRICING so the numbers will be accurate.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default MaterialComp;
