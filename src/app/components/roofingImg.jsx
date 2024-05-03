"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Thermal1 from "../../../public/png/thermal1.png";
import Image from "next/image";

function RoofingImg() {
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
            Roofing Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At <span className="text-red">Veterans Estimators</span>, we offer
        efficient and affordable commercial roofing estimating services. Our
        experienced roofing estimator ensures swift and accurate estimates for
        your roofing projects, facilitating a seamless process from start to
        finish. Contact us anytime for support via chat, email{" "}
        <a
          className=" hover:text-red"
          href="mailto:af@veteransestimators.com"
        >
          <span className="text-red">af@veteransestimators.com</span>
        </a>{" "}
        , or phone at{" "}
        <a className=" hover:text-red" href="tel:+1 917 300 1079">
          {" "}
          <span className="text-red">+1 917 300 1079</span>{" "}
        </a>
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
        Our Roofing Estimates
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-1">
        Our expert Roofing estimators generally work with their expertise
        quickly. They deal with different types of roofing works. Few of them
        are as follows:
      </p>
    </>
  );
}

export default RoofingImg;
