"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SLIDER_CARDS } from "@/data";


function SliderService() {
  const [sliderRef, setSliderRef] = useState(null);
  const ref = useRef();

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       // initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const cards = SLIDER_CARDS.map((x) => (
    <>
      <h2 className="text-[22px] font-semibold lg:mt-3 mt-8">{x.heading}</h2>
   
        <p className="text-[20px] mt-1 font-poppins font-normal w-[80%]">
          {x.para}
        </p>
        
     
      <div className=" w-[140px] h-[60px] border border-red rounded-md mt-3 flex justify-center cursor-pointer text-red  hover:text-white hover:bg-red">
        <button className="">{x.btn}</button>
      </div>
      <div className="lg:flex grid justify-start gap-8">
      <Image className="mt-3 w-[80%] h-auto" src={x.img} />
      <div className="self-center ">
          <div className="lg:grid flex justify-start gap-4">
            <div
              onClick={sliderRef?.slickNext}
              className="border border-red rounded-full p-3 cursor-pointer text-red hover:bg-red hover:text-white"
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
                  d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                />
              </svg>
            </div>
            <div
              onClick={sliderRef?.slickPrev}
              className="border border-red rounded-full p-3 cursor-pointer text-red hover:bg-red hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    setSliderRef(ref.current);
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* <div className="flex justify-between"> */}
        <h1 className="text-[34px] font-poppins font-bold mt-[130px]">
          Our Services
        </h1>
        {/* <div className="self-center mt-[130px]">
            <div className="grid justify-start gap-4">
              <div
                onClick={sliderRef?.slickNext}
                className="border border-red rounded-full p-3 cursor-pointer text-red hover:bg-red hover:text-white"
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
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                  />
                </svg>
              </div>
              <div
                onClick={sliderRef?.slickPrev}
                className="border border-red rounded-full p-3 cursor-pointer text-red hover:bg-red hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <div className="w-[90%] mx-auto mb-16">
        <Slider ref={ref} {...settings}>
          {cards}
        </Slider>
      </div>
    </>
  );
}

export default SliderService;
