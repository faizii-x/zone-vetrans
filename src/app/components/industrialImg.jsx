"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Gray from "../../../public/png/gray.png";
import Image from "next/image";

function IndustrialImg() {
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
            Industrial Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Get our Industrial estimating services to save estimating costs and
        improve accuracy and have your estimates and takeoffs audited and
        analyzed by professional construction estimators within the fastest
        turnaround times.
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

      {/* ............................. */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Veterans Estimating has used in rendering total estimating solutions
            to EPC contractors, owners, engineering firms, financial investors,
            and joint venture partners in the North American industrial sector.
            Our wide range of industrial estimating services is tailored to the
            specific needs of the respective clients starting from project
            planning, through conception and construction. Our profound approach
            to precise estimating procedures gained from experience and
            proficiency in the latest technology, helps them anticipate, plan,
            and effectively control cost throughout the entire lifecycle of the
            project.
          </p>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Do you need consultancy with the estimation and scheduling of
            commercial construction projects?
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Or you don’t have the expertise to perform bill of material for a
            specific trade, size, or complexity?
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default IndustrialImg;
