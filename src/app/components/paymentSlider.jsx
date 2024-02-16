"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { PAYMENT_SLIDER } from "@/data";


function PaymentSlider() {
  const [sliderRef, setSliderRef] = useState(null);
  const ref = useRef();

  const settings = {
    dots: true,
    arrows:false,
    autoplay:true,
    infinite: true,
    vertical: false,
    speed: 1000,
    verticalSwiping: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = PAYMENT_SLIDER.map((x) => (
    <>
      <div className="lg:w-[70%] w-full h-auto rounded-lg bg-[#263238] p-6 ">
        <h1 className="text-white text-center font-poppins font-bold">Payment Methods</h1>
        <div className="lg:flex grid justify-center gap-6 mt-8">
          <Image className="lg:w-[40%] w-full h-[110px] " src={x.img} />

          <div className="w-[120px] h-[60px] border border-red rounded-md mt-8  flex justify-center gap-2 cursor-pointer text-white bg-red">
            <button className="">{x.btn}</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mt-[18px] "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
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
      <div className="w-[100%] mx-auto">
        <Slider ref={ref} {...settings}>
          {cards}
        </Slider>
      </div>
    </>
  );
}

export default PaymentSlider;
