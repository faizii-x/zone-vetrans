"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Quantity10 from "../../../public/png/quantity10.png";
import Image from "next/image";

function QuantityImg() {
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
            Quantities Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Our team provides high Quality Takeoff Services to many construction
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
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
        Service Area
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            An accurate residential estimate serves as a basis for the entire
            construction cash flows. For planning the construction of
            residential buildings, a proper cost estimate gives the idea of the
            potential costs that helps calculate markups, allocate budget,
            obtain financing, quote prices to the clients, and negotiate with
            contractors and subcontractors through our Residential estimating
            services.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Quantity10} />
        </div>
      </div>

    </>
  );
}

export default QuantityImg;
