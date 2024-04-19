"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function ScheduleComp() {
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
        style={{ backgroundImage: `url(${"/png/schedulebg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            CPM Scheduling
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At <span className="text-red">Veterans Estimators</span>, we provide Critical Path Method (CPM) Scheduling
        services to streamline construction projects, ensuring timely completion
        and effective risk management. Trust us to simplify complex projects and
        help you achieve your goals efficiently.
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

export default ScheduleComp;
