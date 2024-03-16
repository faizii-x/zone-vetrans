"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import CallNow from "./callNow";

function ElectricalImg() {
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
            Electrical Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Heating Ventilation and Air-Conditioning contractors reach out to us for
        HVAC estimating services. The MEP estimators specialized in HVAC
        estimating quantifying ducts, hangers, elbows, and fixtures along with
        the condensing evaporating units. The specialized estimators prepare to
        mark up plans along with detailed line item descriptions. The shop
        drawings provided will be for the fabricators, sheet metal contractors,
        and clear understanding purposes. The better the understanding developed
        for the contractor, the better we believe our purpose of construction
        estimating services.
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

      <CallNow />
    </>
  );
}

export default ElectricalImg;
