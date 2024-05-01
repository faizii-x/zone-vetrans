"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function MaterialImg() {
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
            Material Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Our team provides high <span className="text-black font-semibold">Material Takeoff Services</span> to many construction
        companies. Our experienced team, equipped with the latest technologies
        and tools, provides fast and accurate quantity takeoff numbers for labor
        and material. Even on short notice, we can provide many takeoff services
        within 24 hours. With 10 years of experience in the US construction
        industry, we have successfully provided integrated quantity takeoff
        services and solutions for a variety of projects, including remodeling
        and renovations in different parts of the project.
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
    </>
  );
}

export default MaterialImg;
