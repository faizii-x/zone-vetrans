"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Thermal1 from "../../../public/png/thermal1.png";
import Image from "next/image";

function RoofingImg() {
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
            Roofing Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At Veterans Estimators Estimators, we recognize the crucial significance
        of efficient thermal and moisture control in building ventures. Our
        estimation solutions are crafted to assist you in strategizing and
        allocating resources for these vital components, guaranteeing your
        project's durability and resistance to environmental influences.
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

      <h2 className="text-[20px] w-[90%] mx-auto mt-4 font-poppins font-bold">
        Thermal Insulation Estimating
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-1">
        Our expert Roofing estimators generally work with their expertise
        quickly. They deal with different types of roofing works. Few of them
        are as follows:
      </p>
    </>
  );
}

export default RoofingImg;
