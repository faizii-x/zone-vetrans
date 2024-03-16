"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Gray from "../../../public/png/gray.png";
import Image from "next/image";

function CommercialImg() {
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
            Commercial Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Accurate, efficient, and professional commercial estimating services
        designed for commercial general contractors, subcontractors, commercial
        zone developers, lenders, architectural, engineering, and design firms.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Commercial estimating requires sound and in-depth technical
            knowledge along with precision and experience. We believe that an
            accurate estimate serves as a primary tool for budget creation and
            cost control throughout the lifecycle of the project. Our Estimators
            have a great deal of experience of commercial takeoffs and
            estimation with a diversified portfolio in North American, the
            Caribbean, and Australian construction industries including
            renovation, restoration, addition, and new construction. Each
            project is reviewed by senior project managers having past
            experience of estimating a huge commercial portfolio of projects.
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

export default CommercialImg;
