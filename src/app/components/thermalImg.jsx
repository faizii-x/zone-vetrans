"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Thermal1 from "../../../public/png/thermal1.png";
import Image from "next/image";

function ThermalImg() {
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
            Thermal and Moisture Protection Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At <span className="text-red">Veterans Estimators</span>, we understand
        the importance of efficient thermal and moisture management in
        construction projects. Our calculation tools are designed to assist in
        planning and allocating resources for these essential elements, ensuring
        the longevity and durability of your project against environmental
        factors
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
        Thermal Insulation Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Our team of estimators carefully breaks down each roofing project
            using advanced software. Whether it's repairs or installing various
            types of roofs like tin, steel, garage, metal, slate, shingle, or
            flat roofs, we digitize and quantify every detail in an EXCEL
            spreadsheet. Focusing on homeowners, we use their design specs as
            blueprints. With our experience and recent projects, we provide
            estimated costs for building a home roof within an hour.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Thermal1} />
        </div>
      </div>
    </>
  );
}

export default ThermalImg;
