"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Thermal1 from "../../../public/png/thermal1.png"
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
            Thermal and Moisture protection
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Each division is described and takeoff in detail by our project
            estimators. Each roofing trade of work from the online roof repair
            estimate, tin roof, steel roof, garage roof, metal roof, slate roof,
            shingle roof, and flat roof estimates are accurately and precisely
            digitized by takeoff software and quantified in an EXCEL sheet.<br/> A
            large majority of homeowners reach out to us for their house roof,
            for which drawings or specifications make up the work for us and
            with our experience and past recent portfolio of projects, handle
            each project with a handful of expertise and deliver the projected
            cost to build a house roof in an hours’ time
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
