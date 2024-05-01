"use client";
import React from "react";
import Slider from "react-slick";

function NySlide() {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div className=" w-full h-auto bg-cover bg-center slideImg p-8 mt-4">
            <p className=" bg-red rounded-md lg:w-[22%] md:w-[30%] w-[80%]  text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              RESIDENTIAL
            </p>
            <p className="text-white mt-3 text-center lg:w-[80%] w-full mx-auto text-[22px]">
              Our Veterans Estimators services cater to residential projects,
              offering comprehensive solutions such as kitchen and bathroom
              gutting, roof demolition, garage and chimney destruction, siding
              elimination, and complete interior house clearing.
            </p>
          </div>
          <div className=" w-full h-auto bg-cover bg-center slideImg1 p-8 mt-4">
            <p className=" bg-red rounded-md lg:w-[22%] md:w-[40%] w-[80%]  text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              COMMERCIAL
            </p>
            <p className="text-white mt-3 text-center lg:w-[80%] w-full mx-auto text-[22px]">
              Our Veterans Estimators services cater to residential projects,
              offering comprehensive solutions such as kitchen and bathroom
              gutting, roof demolition, garage and chimney destruction, siding
              elimination, and complete interior house clearing.
            </p>
          </div>
          <div className=" w-full h-auto bg-cover bg-center slideImg2 p-8 mt-4">
            <p className=" bg-red rounded-md lg:w-[22%] md:w-[40%] w-[80%]  text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              INDUSTRIAL
            </p>
            <p className="text-white mt-3 text-center lg:w-[80%] w-full mx-auto text-[22px]">
              Our Veterans Estimators services cater to residential projects,
              offering comprehensive solutions such as kitchen and bathroom
              gutting, roof demolition, garage and chimney destruction, siding
              elimination, and complete interior house clearing.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default NySlide;
