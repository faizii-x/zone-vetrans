"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function CostImage() {
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
        style={{ backgroundImage: `url(${"/png/costbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Construction Cost Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
      <span className="text-red">Veterans Estimators</span>, a trusted name in the construction industry, specializes in providing accurate and reliable construction cost estimating services. With our experienced team of estimators, we deliver precise estimates for projects of all sizes and complexities. From detailed blueprint analysis to timely delivery, we ensure client satisfaction every step of the way. Choose <span className="text-red ">Veterans Estimators</span> for your project and experience excellence in cost estimating services. <br/> <br/>
      We recognize the unique requirements of our clients and our construction cost estimating services are tailored to their particular needs. Among our clients are:      </p>

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

export default CostImage;
