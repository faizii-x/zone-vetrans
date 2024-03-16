"use client";
import React, { useState } from "react";
import Image from "next/image";
import Gray from "../../../public/png/gray.png";
import Navbar from "./navbar";
import CostModal from "./costModal";

function HvacImg() {
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
            HVAC Estimating
          </p>
        </div>
      </div>

      {/* .............................. */}

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

      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-6">
        Heating Ventilation and Air-Conditioning contractors reach out to us for
        HVAC estimating services. The MEP estimators specialized in HVAC
        estimating quantifying ducts, hangers, elbows, and fixtures along with
        the condensing evaporating units. The specialized estimators prepare to
        mark up plans along with detailed line item descriptions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            Interior and exterior finishes estimations are very important for
            the construction of buildings. Painting, stucco, plaster,
            specialized coatings estimates are necessary for winning bids and
            quoting a price to the client for contractors. They normally demand
            for bid and material takeoffs for ordering and procuring material.
            <br />
            Accuracy matters a lot when contractors are held responsible for any
            shortcoming in the estimate, therefore experience, professionalism
            and ability along with ensured practices are maintained by the
            estimation company. Hence, relying on outsourcing the estimates and
            cutting down your in-house costs always save expenditure if and only
            if accuracy is established and promised.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <Image className="mx-auto" src={Gray} />
        </div>
      </div>
    </>
  );
}

export default HvacImg;
