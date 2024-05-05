"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function MasonryImg() {
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
            Masonry Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At <span className="text-red">Veterans Estimators</span>, we specialize
        in top-notch masonry estimating services, offering accurate and timely
        solutions nationwide. Our skilled team excels in Division 4, covering
        brickwork, CMU walls, and more. With advanced tools like OST, Planswift,
        and Bluebeam, we ensure precision in every evaluation. Contact us at{" "}
        <a className=" hover:text-red" href="tel:+1 917 300 1079">
          {" "}
          <span className="text-red">+1 917 300 1079</span>
        </a>{" "}
        or via email{" "}
        <a
          className=" hover:text-red"
          href="mailto:af@veteransestimators.com"
        >
          {" "}
          <span className="text-red">af@veteransestimators.com</span>
        </a>
        .
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
        The Range Of Masonry Estimating Services
      </h2>

      <p className="text-[22px] font-poppins font-normal  w-[90%] mx-auto">
        At <span className="text-red">Veterans Estimators</span>, we specialize
        in delivering precise masonry estimates tailored to your needs. With
        extensive experience in the AEC industry, our team ensures accuracy and
        client satisfaction.
      </p>
    </>
  );
}

export default MasonryImg;
