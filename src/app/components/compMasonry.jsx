import Image from "next/image";
import React from "react";
import Mason from "../../../public/png/mason.png";

function CompMasonry() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="text-[30px] font-bold mt-6">
          What Do We Take In The Division 4 Masonry Trade?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto">
          <div className="col-span-1">
            <li className="text-[22px] font-poppins font-normal mt-3">
              CMU Masonry
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Glass unit masonry
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Clay unit masonry
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Architectural & glazed masonry
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Stonemasonry walls
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Granite
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Limestone
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Marble
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Sandstone
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Soapstone
            </li>
          </div>
          <div className="col-span-1">
            <li className="text-[22px] font-poppins font-normal mt-3">Slate</li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Cast stone
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Mortar and grout
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Masonry Flashing
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Masonry Anchorage
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Masonry Insulation
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Chimney brick
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Brick tuckpointing
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Brick wall tiles
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1">
              Brick Veneer
            </li>
            <li className="text-[22px] font-poppins font-normal mt-1 mb-2">
              Stucco work
            </li>
          </div>
          <div className="col-span-1 self-center">
            <Image className="mx-auto" src={Mason} />
          </div>
        </div>
        <h2 className="text-[24px] font-bold mt-6">
          Why should you outsource your masonry estimate?
        </h2>
        <p className=" text-[22px] font-poppins font-normal mt-4">
          At Veterans Estimators, we specialize in detailed masonry estimates,
          saving you time and improving accuracy. With our outsourcing services,
          you can win more bids, increase profitability, and focus on what
          matters most. Contact us today for a free quote!
        </p>
      </div>
    </>
  );
}
export default CompMasonry;
