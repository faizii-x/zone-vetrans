"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Gray from "../../../public/png/gray.png";
import Image from "next/image";

function InsulateImg() {
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
            Insulating Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
       <span className="text-red ">Veterans Estimators</span> specializes in insulation estimating services,
        ensuring accuracy and efficiency to meet your project deadlines and
        secure bids. Whether it's a residential or industrial project, we
        meticulously measure walls, floors, and ceilings using cutting-edge
        technology, factoring in doors and windows for precise estimates. Our
        comprehensive approach covers all forms of insulation, including liquid
        foam, spray board, rolls, batts, loose-fill, and foam board. Contact
        Veterans Estimators today at +1 917 300 1079 for a free consultation.<br/> We
        always strive to provide quality services to our clients so that they
        reach the exact figures in terms of their cost estimates and bid with
        confidence.
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

export default InsulateImg;
