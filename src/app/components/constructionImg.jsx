"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Takeoff1 from "../../../public/png/takeoff1.png";
import CallNow from "./callNow";

function ConstructionImg() {
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
        className=" max-w-full h-auto bg-cover bg-center p-4 "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Construction Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        <span className="text-red font-semibold">Veterans Estimators</span> have
        experience takeoff estimators who has the skills and knowledge to
        provide you services from beginning to end. More profit margin dollars
        can be lost by mistakes in the framing materials order than in any other
        part of the process. That is why, after evaluating many software
        packages, we purchased a full-featured system that allows us to tailor
        our Material Estimates to local practices.
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
        Service Area
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-6 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            We have clients that have construction projects being built in many
            parts of the country. So no matter where you are located or the
            project you are bidding, we provide Estimating services all over the
            United States. <br />
            <br />
            We specialize in material takeoffs and quantity surveys for both
            labor and materials and for most construction trades.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Takeoff1} />
        </div>
      </div>

      <CallNow />
    </>
  );
}

export default ConstructionImg;
