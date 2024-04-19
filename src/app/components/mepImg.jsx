"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Mepp from "../../../public/png/mepp.png";

function MepImg() {
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
            MEP Estimating Services
          </p>
        </div>
      </div>

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-10 shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      {/* ...................................................... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
          Looking for MEP estimating services? <span className="text-red">Veterans Estimators</span> provides fast, accurate, and budget-friendly estimates within 24-48 hours. Our thorough takeoffs assist contractors in securing successful bids. With over 10 years of expertise, we specialize in construction cost estimates and material takeoff services.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Mepp} />
        </div>
      </div>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
      <span className="text-red">Veterans Estimators</span> offers rapid, accurate, and affordable estimates within 24-48 hours. Our thorough takeoffs aid contractors in securing successful bids. With over a decade of experience, we specialize in construction cost estimates and material takeoff services.
      </p>
    </>
  );
}

export default MepImg;
