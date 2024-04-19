"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Fram from "../../../public/png/fram.png";

function FramingImg() {
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
            Framing Estimating
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
      {/* ...................................................... */}

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Expertise and Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-red">Veterans Estimators</span> offers framing
            estimating services to contractors, delivering detailed cost
            breakdowns for informed decision-making. Our services help avoid
            budget overruns and ensure timely project completion, fostering
            client satisfaction and industry reputation. Accurate framing
            estimates empower sound financial decisions, preventing project
            delays and budgetary issues. Invest in our framing estimating
            services for a successful construction experience
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Fram} />
        </div>
      </div>

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        Wood frame construction
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-2">
        Wood frame construction utilizes wood as the primary material for
        building structures. It's commonly used in residential and low-rise
        commercial buildings due to its affordability, ease of construction, and
        design flexibility. This method involves assembling wood components like
        studs and joists to form the building's framework, providing support for
        walls, floors, and roofs. It's popular for its cost-effectiveness and
        sustainability.
      </p>
    </>
  );
}

export default FramingImg;
