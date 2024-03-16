"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Quantity10 from "../../../public/png/quantity10.png";
import Image from "next/image";

function RebarImg() {
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
        style={{ backgroundImage: `url(${"/png/quantityImg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Rebar Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Are you exploring a professional platform to have Rebar estimating
        services for your construction project? If yes, then Veterans Estimating
        has got you covered. We are here with an expert team of rebar estimators
        who can easily deliver precise and qualitative Rebar detailing services
        and Rebar estimating services. <br />
        Our Rebar estimating services are quite distinctive among other
        competitors due to our proficiency in delivering accurate and
        comprehensive rebar estimate to our wide range of clients. We deal with
        a wide array of clients and construction projects with efficient
        results.
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
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
        Rebar Estimating Services
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-2">
        Rebar estimating services demand experience; thus, Veterans Estimators
        estimating stood competitive among competitors due to its competitive
        team of Rebar estimators. A steel reinforcing rod effectively
        strengthens concrete and cast into concrete as an integral part of the
        construction process. Concrete pricing demands an estimate in which an
        evaluation of demanding Rebar is involved for a certain construction
        project. We include the following things while giving our clients fast,
        accurate quotes.
      </p>
    </>
  );
}

export default RebarImg;
