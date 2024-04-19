"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Quantity10 from "../../../public/png/quantity10.png";
import Image from "next/image";

function RebarImg() {
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
        style={{ backgroundImage: `url(${"/png/quantityImg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Rebar Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Looking for reliable Rebar estimating services for your construction
        project? <span className="text-red">Veterans Estimators</span> has you covered. Our expert team
        specializes in delivering precise and high-quality Rebar detailing and
        estimating services.<br/> What sets our Rebar estimating services apart is
        our commitment to accuracy and thoroughness. With years of experience,
        we have successfully provided comprehensive estimates to a diverse range
        of clients. No matter the project size or complexity, we ensure
        efficient and accurate results.
      </p>

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-[999px] mr-2 shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>
      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Rebar Estimating Services
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-2">
      Rebar estimating services require expertise. Veterans Estimators stands out with our skilled team. Rebar reinforces concrete. To price concrete jobs, we evaluate Rebar needs. Our quotes are quick and precise.
      </p>
    </>
  );
}

export default RebarImg;
