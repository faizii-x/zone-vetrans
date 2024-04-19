"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import CallNow from "./callNow";
import Ele1 from "../../../public/png/ele1.png";
import Image from "next/image";

function ElectricalImg() {
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
            Electrical Estimating Services
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            At <span className="text-red">Veterans Estimators</span>, we specialize in comprehensive electrical
            estimating services, covering everything from low-voltage solutions
            to instrumentation and control takeoffs. With our team's expertise
            and collaboration with clients, we ensure precise outputs tailored
            to each project's unique needs. Our experienced professionals
            utilize cutting-edge electrical takeoff software to deliver accurate
            estimates, helping you secure successful bids.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <Image className="mx-auto" src={Ele1} />
        </div>
      </div>

      <CallNow />
    </>
  );
}

export default ElectricalImg;
