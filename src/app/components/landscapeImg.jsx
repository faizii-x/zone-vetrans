"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Gray from "../../../public/png/gray.png";
import Image from "next/image";

function LandscapeImg() {
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
            Landscape Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        <span className="font-bold">Veterans Estimators</span> is here to assist
        you by providing their expert landscaping estimating services. Our
        landscape estimator is well equipped and expert enough to run a
        profitable business. Different statistics display that the contractors
        generate profit on every job. It is essential to learn an accurate bid
        on Landscaping to ensure either you’re generating a profit on every
        other job or not. We are here with an expert team of landscape
        estimators to manage Landscaping takeoff smartly and quickly through
        professional estimating software. Plan hub estimating is a professional
        platform that is quite efficient to make your landscape bidding and
        estimating process by including simple features like auto count, arc
        functionality and different items and assemblies.
      </p>

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-[1000px] shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      {/* ..................................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        How Do We Deliver Accurate Landscaping Estimating Services With
        Landscaping Estimating Software?
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        We are using cloud-based estimating software for our diverse range of
        Landscaping estimating through Plan swift estimating software. Following
        are the few ways to manage Landscaping takeoff services through Plan
        swift.
      </p>
    </>
  );
}

export default LandscapeImg;
