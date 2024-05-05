"use client";
import React, { useState } from "react";
import Image from "next/image";
import Gray from "../../../public/png/hvacc.png";
import Navbar from "./navbar";
import CostModal from "./costModal";

function HvacImg() {
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
            HVAC Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-50 shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      {/* ...................................................... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Contractors in HVAC rely on <span className="text-red">Veterans Estimators</span> for precise HVAC
            estimating. Our MEP estimators specialize in quantifying HVAC
            components like ducts, hangers, fixtures, and units. With detailed
            plans and descriptions, our estimators ensure clarity for
            fabricators and contractors. At <span className="text-red">Veterans Estimators</span>, our experienced
            team focuses on enhancing comprehension for contractors, design
            engineers, and fabricators, providing clear cost projections for
            bidding and planning.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default HvacImg;
