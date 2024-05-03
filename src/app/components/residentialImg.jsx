"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Hom from "../../../public/png/hom.png";
import Image from "next/image";

function ResidentialImg() {
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
          <p className="w-[100%] text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Residential Estimating Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Providing fast and reliable residential estimating services tailored to
        the needs of Residential Contractors, Subcontractors, Homebuilders,
        Homeowners, Developers, Investors, Lenders, and Architects.
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

      {/* ............................. */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Accurate residential appraisals are essential for all construction
            financial dealings. Our Domestic Estimating services provide precise
            cost estimates for residential projects, aiding in budget
            allocation, financial planning, customer quoting, and contractor
            negotiations. With experienced professionals and cutting-edge
            software, we ensure detailed analysis and regional pricing accuracy
            for labor and materials. Our streamlined process adheres to industry
            standards, facilitating easy review and submission to vendors.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Hom} />
        </div>
      </div>
    </>
  );
}

export default ResidentialImg;
