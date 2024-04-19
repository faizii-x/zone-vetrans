"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Furnishing1 from "../../../public/png/furnishing1.png";

function FurnishImg() {
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
            Furnishings Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

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
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-6">
      We're committed to providing reliable and affordable furnishing estimation services. Our skilled team uses cutting-edge tools to deliver precise estimates, ensuring informed decisions and budget adherence for both residential and commercial projects.
Our digital estimating covers:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-1 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Digital estimating can provide estimates for:
            <li className="text-[22px] font-poppins font-normal mt-1">
            Concrete Countertops
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Stone Countertops
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Plastic Laminates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Wood Countertops
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Cultured Marble
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Solid Surfacing
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Glass Countertops
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Tile
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Laboratory Countertops
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Specialty Sinks and countertops
          </li>
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Furnishing1} />
        </div>
      </div>
    </>
  );
}

export default FurnishImg;
