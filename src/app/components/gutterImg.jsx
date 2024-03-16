"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import General10 from "../../../public/png/general10.png";

function GutterImg() {
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
            Gutter Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Are you exploring a reliable platform to have gutter estimating services
        for your construction project? If yes, you are on the right platform.
        Veterans Estimators is a professional platform with a wide range of
        estimating services, including gutter estimating services. We deal with
        our clients throughout the World in delivering reliable gutter estimates
        for their construction projects.
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
        Gutter Material
      </h2>

      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto">
        We efficiently try to imagine a certain type of new gutter that is quite
        right for you and include all the required material for a gutter
        installation. There are comprehensive varieties of gutter that vary
        according to their durability thresholds and appearances. Our expert
        Gutter cost estimators deal with a wide range of following gutters.
      </p>
    </>
  );
}

export default GutterImg;
