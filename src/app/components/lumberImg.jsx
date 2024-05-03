"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function LumberImg() {
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
            Lumber Takeoff
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        <span className="text-red">Veterans Estimators</span> specializes in
        providing high-quality wooden and plastic materials tailored for
        construction projects. With our wide range of products and expert
        guidance, we ensure that your projects benefit from the best of natural
        and man-made materials.
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

      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-6">
        What Do We Deliver In Our Lumber Takeoffs?
      </h2>

      <p className="text-[22px] font-poppins font-normal  w-[90%] mx-auto">
        Our lumber takeoffs services cover timber/lumber, labor costs, labor-hours, and
        transportation costs. Our detailed estimates help clients win bids and
        negotiate with suppliers. We provide accurate lumber cut lists, making
        it easier for woodworkers to minimize wastage and maximize timber usage.<br/>
        Our Deliverables for The Lumber Takeoff Comprises
      </p>
      <li className="text-[22px] font-poppins font-normal mt-3 w-[90%] mx-auto">
        Lumber takeoff EXCEL sheets
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Labor and material costs
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Marked up drawing plans
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Lumber cut list
      </li>

      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
      Bid Summary comprising total material. labor & equipment costs, profit percentage, overheads, insurance, logistics, permits, taxes, and various other costs.
      </li>

      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
      Complete review of inclusions and exclusions
      </li>
    </>
  );
}

export default LumberImg;
