"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { TRADES_MAP } from "@/data";

function TradeSeond() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <div className="flex justify-center gap-4 mt-[160px]">
        {TRADES_MAP.map((x) => (
          <>
            <div className=" ">
              <h4>{x.heading}</h4>
            </div>
            <div className=" grid grid-cols-1 w-[60%] mx-auto ">
              <Slider {...settings}>
                <Image className="relative h-[240px]" src={x.img} alt=""/>
                {/* <div className="flex justify-between gap-6 ">
                  <h4 className=" text-[20px] text-white font-poppins font-semibold">
                    {x.title}
                  </h4>
                  <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6  text-white cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div> */}
                {/* <p className="absolute left-4 top-0 text-[19px] font-poppins font-light text-red">
                  {x.text}
                </p> */}
              </Slider>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default TradeSeond;
