"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Site from "../../../public/png/site.png";

function SiteImg() {
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
            Sitework Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        At <span className="text-red">Veterans Estimators</span>, we specialize
        in sitework estimating services for contractors and developers. Using
        advanced software, we deliver precise material and labor estimates
        within 24-48 hours. Our Division 2 experts provide accurate estimates
        for all project types, with flexible pricing options and 24/7 support
        available. Contact us at{" "}
        <a
          className="underline hover:text-red"
          href="mailto:someone670@gmail.com"
        >
          {" "}
          af@veteransestimators.com{" "}
        </a>{" "}
        or{" "}
        <a className="underline hover:text-red" href="tel:+1 917 300 1079">
          {" "}
          +1 917 300 1079
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
      {/* ...................................................... */}

      <h2 className="text-[26px] font-bold w-[90%] mx-auto mt-6">
        Our Sitework Estimating Services Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-1 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            At <span className="text-red">Veterans Estimators</span>, we
            recognize the uniqueness of every sitework project. Using
            cutting-edge technology and seasoned professionals, we meticulously
            analyze your blueprints to deliver accurate estimates for materials,
            labor, and more. Our comprehensive sitework estimating services go
            beyond the basics, considering equipment, insurance, permits, and
            other factors to give you a complete cost breakdown. Need
            cost-effective solutions? We offer flexible options tailored to your
            budget:
            <li className="text-[22px] font-poppins font-medium mt-2">
              Cost-effective Solutions (check prices)
            </li>
            <li className="text-[22px] font-poppins font-medium ">
              Efficiency & Accuracy
            </li>
            <li className="text-[22px] font-poppins font-medium ">
              Fast Turnaround Times
            </li>
            <li className="text-[22px] font-poppins font-medium ">
              Confidentiality
            </li>
            <li className="text-[22px] font-poppins font-medium ">
              Certified Estimators
            </li>
            <li className="text-[22px] font-poppins font-medium ">
              24/7 Support on Chat & Email
            </li>
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-1 cols-span-1 mx-auto self-center">
          <Image className="mx-auto" src={Site} />
        </div>
      </div>
    </>
  );
}

export default SiteImg;
