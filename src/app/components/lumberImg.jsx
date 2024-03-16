"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";

function LumberImg() {
  const [serviceModal, setServiceModal] = useState(false);

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  <li className="text-[18px] font-medium font-poppins">
  Roofing Takeoff
</li>

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Lumber Takeoff
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        Welcome to Veterans Estimators, where our expertise lies in delivering
        top-notch wooden and plastic materials tailored for construction
        endeavors. Our comprehensive selection of products, coupled with
        proficient consultation, guarantees that your ventures reap the
        advantages of both natural and man-made materials.
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

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        What Do We Deliver In Our Lumber Takeoffs?
      </h2>

      <p className="text-[22px] font-poppins font-normal  w-[90%] mx-auto">
        Our lumber takeoffs include all the details like timber or lumber, labor
        cost, labor-hours, and transportation cost. Through these details, we
        have helped them in winning the bids and in getting good markups.
        Furthermore, our estimates have also helped General contractors and
        builders to negotiate with their suppliers. Moving forward, we also
        include an accurate lumber cut list. It eases the woodworkers with the
        lineal foot to board foot conversions. This ensures that the most of the
        timber is used with minimum wastage. Our Deliverables for The Lumber
        Takeoff Comprises
      </p>
      <li className="text-[22px] font-poppins font-normal mt-3 w-[90%] mx-auto">
        Lumber takeoff EXCEL sheets
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Labor and material costs
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Marked up drawing plans
      </li>
      <li className="text-[22px] font-poppins font-normal mt-2 w-[90%] mx-auto">
        Lumber cut list
      </li>
    </>
  );
}

export default LumberImg;
