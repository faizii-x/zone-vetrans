"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Fram from "../../../public/png/fram.png";

function FloorImg() {
  const [serviceModal, setServiceModal] = useState(false);

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Flooring Estimating & Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-[1000px] shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6 mb-4">
      At <span className="text-red">Veterans Estimators</span>, we make flooring estimates easy and accurate. Whether you're a contractor, manufacturer, architect, or designer, we've got you covered. Our tailored services consider all design elements to minimize waste. From access flooring to stair details, we cater to various properties such as residential, commercial, and more. Trust us for seamless flooring solutions.
      </p>
    </>
  );
}

export default FloorImg;
