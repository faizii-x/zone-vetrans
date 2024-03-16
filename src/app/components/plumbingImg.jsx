"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Gray from "../../../public/png/gray.png";
import Image from "next/image";

function PlumbingImg() {
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
            Plumbing Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
      Precise and super-fast plumbing estimating services for General Contractors, Piping, Plumbing, Mechanical and Insulation Contractors and Designers throughout North America, Australia, Africa and the Caribbean.
<br/>For 15 years, Planhub Estimators has earned a reputation for understanding the unique challenges of our clients and providing prompt estimating solutions to fulfill their project goals. We are committed to providing accurate and quick estimates to ensure that our clients succeed by submitting competitive bids. With the proper knowledge of plumbing systems, materials, labor rates, specifications, and various factors, our estimating professionals are experts with the latest takeoff software to perform on-screen takeoff and apply up to date zip code based pricing using RSMeans and our developed cost database for material and labor costs.
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

export default PlumbingImg;
