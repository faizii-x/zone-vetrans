"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Concreteimg from "../../../public/png/concreteimg.png";
import CallNow from "./callNow";


function ConcreteImg() {
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
            Concrete Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        To assist builders, contractors, and homeowners in evaluating the cost
        of their concrete projects, we offer concrete estimating services. All
        labor and material costs associated with finishing the construction are
        taken into account in our full concrete estimate process. Our team of
        concrete cost estimators is up to date on current market prices and
        trends. They offer precise and trustworthy concrete cost estimates using
        cutting-edge technologies and techniques.
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

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        Our Estimation Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            The concrete estimation process starts with a thorough study of
            drawing plans submitted by the client to identify the scope of work.
            After that, an on-screen takeoff is performed using digital software
            like Bluebeam, Planswift, Accubid, etc. The quantities are imported
            to EXCEL spreadsheets mentioned with detailed line item
            descriptions.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Concreteimg} />
        </div>
      </div>
      
      <CallNow />
    </>
  );
}

export default ConcreteImg;
