"use client";
import React, { useState } from "react";
import TradeSlider from "./tradeSlider";
import Link from "next/link";

function TradeMap() {
  const [showMore, setShowMore] = useState(false);
  const [isPadding, setIsPadding] = useState("styleClass2");

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleOoper = () => {
    setIsPadding("styleClass");
  };
  const handleNichy = () => {
    setIsPadding("styleClass2");
  };

  return (
    <div className="w-[90%] mx-auto mt-[160px]">
      <h1 className="text-[24px] font-bold font-poppins">Our Trades</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 container mx-auto mt-5">
        <div className="col-span-1">
          <div className={`h-[470px] overflow-y-hidden`}>
            <div className={`${isPadding}`}>
              <Link href="/trades/general">
                <p className="border rounded-3xl p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  General Requirements
                </p>
              </Link>
              <Link href="/trades/sitework">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Sitework Estimating
                </p>
              </Link>
              <Link href="/trades/concrete">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Concrete Estimating
                </p>
              </Link>
              <Link href="/trades/masonry">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Masonry Estimating
                </p>
              </Link>
              <Link href="/trades/metals">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Metals Estimating
                </p>
              </Link>
              <Link href="/trades/lumber">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Lumber Takeoff
                </p>
              </Link>
              <Link href="/trades/thermal">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[70%]">
                  Thermal & Moist protection Estimating
                </p>
              </Link>
              <Link href="/trades/framing">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Framing Estimating
                </p>
              </Link>
              <Link href="/trades/interior">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Interior & Exterior finishes
                </p>
              </Link>
              <Link href="/trades/specialties">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Specialties
                </p>
              </Link>
              <Link href="/trades/equipment">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Equipment Estimating
                </p>
              </Link>
              <Link href="/trades/furnishing">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Furnishing Estimating
                </p>
              </Link>
              <Link href="/trades/specialConstruction">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Special Construction Estimating
                </p>
              </Link>
              <Link href="/trades/convey">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Conveying System Estimating
                </p>
              </Link>
              <Link href="/trades/mep">
                <p className="border rounded-3xl mt-2 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  MEP Estimating
                </p>
              </Link>
              <Link href="/trades/hvac">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  HVAC Estimating
                </p>
              </Link>
              <Link href="/trades/commercial">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Commercial Estimating
                </p>
              </Link>
              <Link href="/trades/industrial">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Industrial Estimating
                </p>
              </Link>
              <Link href="/trades/residential">
                <p className="border rounded-3xl mt-1 p-1 hover:bg-red text-center hover:text-white cursor-pointer text-[16px] font-poppins font-semibold w-[50%]">
                  Residential Estimating
                </p>
              </Link>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div
              onClick={handleOoper}
              className="bg-red border text-white hover:text-black hover:bg-white w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6  "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div
              onClick={handleNichy}
              className="bg-red border text-white hover:text-black hover:bg-white w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center"
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <TradeSlider />
        </div>
      </div>
    </div>
  );
}

export default TradeMap;
