"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import PlanImgg from "../../../public/png/planimgg.png";
import CallNow from "./callNow";
import PlanStyle from "./planStyle";

function PlanningImg() {
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
            Planning
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        In project management, planning is the first crucial step. It's like
        creating a big map with project managers and construction teams to set
        the direction. Scheduling, on the other hand, is about putting that map
        into a timeline with scheduling experts. So, planning sets the path, and
        scheduling ensures things happen on time.
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
        What is Construction Master Plan?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-1 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            A construction blueprint, guided by Veterans Estimators, outlines
            how a project should be organized, planned, and directed to achieve
            its goals on time and within budget. It serves as a roadmap,
            ensuring tasks are coordinated and managed efficiently to meet
            deadlines, stay within financial limits, and adhere to
            specifications. While the contracting scheme offers various
            solutions, it doesn't address governmental or societal constraints,
            construction resources, or legal requirements. These issues are
            resolved during the project execution scheme, which must be reviewed
            and adjusted as needed throughout the project lifecycle.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={PlanImgg} />
        </div>
      </div>
      <PlanStyle />
      <CallNow />
    </>
  );
}

export default PlanningImg;
