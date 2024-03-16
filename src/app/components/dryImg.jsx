"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Dryy from "../../../public/png/dryy.png";

function DryImg() {
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
            Drywall Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        As an estimation company, Veterans Estimators understands the importance
        of accurate and reliable project estimation services. To ensure the
        success of your estimation company, it is crucial to meet certain
        general requirements that establish your professionalism and expertise.
        In this guide, we will outline the key general requirements that every
        estimation company, including Veterans Estimators, should consider.
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

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Dry Wall Estimating Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-2">
        <div className="col-span-2">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Drywall or Gypsum board Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Drywall material & labor takeoffs with man hour
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Acoustical Ceiling Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Wood Framing Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Metal Framing Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Budget Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Bid Estimates
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Complete Bidding Assistance
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Change Order Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Drywall Project Management
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Subcontractor Marketing
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Dryy} />
        </div>
      </div>

      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        Among our clients are general contractors, drywall contractors, drywall
        installation service providers, homeowners, and designers involved in
        the construction of single and multi-family residential, commercial, and
        retail projects. With the special focus on bid deadlines, budget
        constraints, and scope of the project, we provide ready to be submitted
        complete bids containing accurate cost estimates and material takeoff
        sheets to drywall contractors that help them in winning their bids with
        good profit margins.<br/> We quantify drywall sheets, drywall mud, acoustic
        insulation, sheathing, screws, beads, studs, headers, etc. along with
        manhours, labor costs, logistics, permits, taxes, and other factors
        involved.
      </p>
    </>
  );
}

export default DryImg;
