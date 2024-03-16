"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function MasonryImg() {
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
            Masonry Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        For top-tier masonry estimating services, look no further than Procore
        Estimators. With extensive experience spanning America we excel in
        providing precise and punctual estimates. Our adept masonry cost
        estimator is well-versed in Division 4, comprehensively covering
        brickwork, CMU walls, masonry types, and more. Using advanced software
        like AccuBid, Planswift, and Bluebeam, and adhering to esteemed
        organizations like AACE and AIQS, our dedicated team ensures quality and
        accuracy in every estimation.
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
      {/* ...................................................... */}

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        The Range Of Masonry Estimating Services
      </h2>

      <p className="text-[22px] font-poppins font-normal  w-[90%] mx-auto">
        With practical knowledge and years of experience in the AEC industry, we
        have aced in preparing timely and accurate estimates for masonry works
        to the respective clients i.e. general contractors, masonry contractors,
        masonry repair contractors, vendors, masons, developers, architects,
        designers, home builders. Our services are designed relative to the
        specific needs of our clients.
      </p>
    </>
  );
}

export default MasonryImg;
