"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import General10 from "../../../public/png/general10.png";

function GeneralImg() {
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
            General Requirements
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        <span className="text-red">Veterans Estimators</span> provides a
        thorough understanding of the client's project expectations and
        requirements, ensuring clarity in the project's vision. The General
        Conditions section in the Contract Document outlines the rights,
        responsibilities, and relationships between all parties involved.
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

      <h2 className="text-[26px] font-bold w-[90%] mx-auto mt-6">
        Expertise and Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Having a skilled and experienced team is crucial for any estimation
            company. At <span className="text-red font-semibold">Veterans Estimators</span>, we pride ourselves on our
            knowledgeable team members who understand various industries,
            project types, and estimation techniques. Our expertise and
            successful track record give our clients confidence and distinguish
            us from the competition.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={General10} />
        </div>
      </div>
    </>
  );
}

export default GeneralImg;
