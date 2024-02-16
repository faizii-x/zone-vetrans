"use client";
import { TRADES_MAP } from "@/data";
import React, { useState } from "react";
import TradeSlider from "./tradeSlider";

function TradeMap() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-[90%] mx-auto mt-[160px]">
    <h1 className="text-[24px] font-bold font-poppins">Our Trades</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 container mx-auto mt-5">
      <div className="col-span-1">
        {TRADES_MAP.slice(0, showMore ? TRADES_MAP.length : 9).map(
          (item, index) => (
            <div key={index} className="mb-2">
              <h3 className="border border-black mb-2 rounded-full font-bold flex justify-center items-center w-[60%] p-2 cursor-pointer">
                {item.heading}
              </h3>
            </div>
          )
        )}
        <div
          onClick={toggleShowMore}
          className="cursor-pointer flex justify-center gap-2 border border-black w-[50px] h-[50px] rounded-full hover:bg-red hover:text-white hover:border-white"
        >
          
          <button>
            {showMore ? (
              <a href="#section2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
              </a>
            ) : (
              <a href="#section1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              </a>
            )}
          </button>
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