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
            Sitework Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Site work contractors, landscaping contractors, land developers, general
        contractors, and site contractors rely on our site work estimating
        services for accurate and detailed site work estimate, cut and fill
        takeoff delivered to them within 24 to 48 hours. With accurate figures,
        they win more bids and cut their overhead costs.
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

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
      Our site work estimating services Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Residential Site work
            <br />
            Commercial Site work
            <br />
            Industrial Site work
            <br />
            We understand every sitework project is different and requires a
            unique approach. With the use of the latest software technologies in
            sitework estimation, our expert estimators carefully go through the
            drawing and plans and prepare accurate sitework takeoffs of material
            and labor along with manhours. All other factors like construction
            equipment, insurance, logistics, safety, permits, contingencies,
            etc. are also taken into account during our site work estimating
            services. If you can’t afford the expense of a full-time estimator
            and expensive software or need an estimator to supplement your
            existing estimating department, we are at your service! Offering
            you:
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
