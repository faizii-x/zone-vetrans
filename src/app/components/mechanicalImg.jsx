"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function MechanicalImg() {
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
        className=" max-w-full h-auto bg-cover bg-center  "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Mechanical Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
       <span className="text-red">Veterans Estimators</span> offers MEP estimating services for mechanical
        contractors. Our expert team provides precise estimates tailored to your
        project, covering HVAC, plumbing, refrigeration, and piping. With
        up-to-date data on costs, we ensure accuracy from small jobs to
        large-scale projects. Contact us for a free consultation at <span className="text-red">+1 917 3001079</span>.
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
    </>
  );
}

export default MechanicalImg;
