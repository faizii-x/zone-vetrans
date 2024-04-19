"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Coma from "../../../public/png/coma.png";
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
            We specialize in providing reliable and expert commercial cost
            estimating services exclusively for clients in the USA. With a
            strong technical understanding, our team delivers precise estimates
            tailored to manage budgets effectively for projects across the
            country. Each project is overseen by senior project managers with a
            proven track record in commercial estimation.Each project is
            scrutinized by senior project managers with a track record of
            estimating a diverse range of commercial projects.
          </p>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Do you need consultancy with the estimation and scheduling of
            commercial construction projects?
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Or you don’t have the expertise to perform bill of material for a
            specific trade, size, or complexity?
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Or you are not confident about how to prepare and file a bidding
            proposal?
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Coma} />
        </div>
      </div>
    </>
  );
}

export default CommercialImg;
