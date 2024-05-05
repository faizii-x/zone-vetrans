"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Indi from "../../../public/png/indi.png";
import Image from "next/image";

function IndustrialImg() {
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
            Industrial Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Use our specialized Industrial estimating services to decrease
        estimating expenses and improve precision, while also benefiting from
        audits and analysis of your estimates and takeoffs by experienced
        construction estimators, provided in the shortest possible timeframe.
      </p>

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-50 shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />

      {/* ............................. */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-red">Veterans Estimators</span> is well-known
            for offering complete estimating services to EPC contractors,
            owners, engineering firms, financial backers, and collaborators in
            the North American industrial sector. Our estimating services are
            particularly tailored to our clients' specific needs, and range from
            project conceptualization and A to construction. Our extensive
            methodology for accurate estimates, supported by knowledge and the
            use of cutting-edge technology, allows them to predict, orchestrate,
            and efficiently manage costs over the project's entire lifecycle.
            Contact us via{" "}
            <a
              className=" hover:text-red"
              href="mailto:af@veteransestimators.com"
            >
              {" "}
              <span className="text-red">af@veteransestimators.com</span>
            </a>{" "}
            {" "} or{" "}
            <a className=" hover:text-red" href="tel:+1 917 300 1079">
              {" "}
              <span className="text-red">+1 917 300 1079</span>
            </a>
          </p>
       
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Indi} />
        </div>
      </div>
    </>
  );
}

export default IndustrialImg;
