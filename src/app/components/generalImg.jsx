"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import General10 from "../../../public/png/general10.png";

function GeneralImg() {
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
            General Requirements
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        As an estimation company, Veterans Estimators understands the importance
        of accurate and reliable project estimation services. To ensure the
        success of your estimation company, it is crucial to meet certain
        general requirements that establish your professionalism and expertise.
        In this guide, we will outline the key general requirements that every
        estimation company, including Veterans Estimators, should consider.
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

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
        Expertise and Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            One of the foremost requirements for any estimation company is a
            team of experts with extensive knowledge and experience in the
            field. Your team should possess a deep understanding of various
            industries, project types, and estimation techniques. Demonstrating
            expertise and a track record of successful projects will instill
            confidence in your clients and set you apart from the competition.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={General10} />
        </div>
      </div>
      

    </>
  );
}

export default GeneralImg;
