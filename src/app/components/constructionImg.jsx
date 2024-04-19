"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Takeoff1 from "../../../public/png/takeoff1.png";
import CallNow from "./callNow";

function ConstructionImg() {
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
        className=" max-w-full h-auto bg-cover bg-center p-4 "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Construction Takeoff Services
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        <span className="text-red  ">Veterans Estimators</span> offers reliable
        Construction Takeoff Services, including Quantity Takeoff Services and
        Material Takeoff Services, to ensure the success of your project right
        from the start. With our extensive experience spanning over the past 10
        years, we understand the ever-changing market conditions and can handle
        projects of any complexity, serving contractors, owners, vendors, and
        developers.
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
        Service Area
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-1 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            We help clients all over the United States with our Estimating
            services. Whether you're in any part of the country or bidding on
            any project, we've got you covered. We specialize in figuring out
            how much material and labor you'll need for your construction
            project. Our team will go through the blueprints and list all the
            materials you need in a format you can easily use, like Microsoft
            Excel or Adobe. We're fast and accurate, making sure you have
            everything you need to build. Plus, we organize the materials by
            location, making it simple for your team to know where everything
            goes.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Takeoff1} />
        </div>
      </div>

      <CallNow />
    </>
  );
}

export default ConstructionImg;
