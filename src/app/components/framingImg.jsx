"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import Fram from "../../../public/png/fram.png";

function FramingImg() {
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
            Framing Estimating
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

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
        Expertise and Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            Framing estimating services play a crucial role in the completion of
            any project by providing comprehensive and authentic estimates in
            the construction world. Accurate framing estimating services can be
            done through construction estimating services and act as a
            foundation for the successful completion of any project. Through
            framing estimating services all sorts of contractors ranging from
            big to small can get detailed and accurate cost estimating to make
            well-informed decisions, avoid any sort of budget overruns, and
            finally complete the work in the given time frame period.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Fram} />
        </div>
      </div>

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-6">
        Wood frame construction
      </h2>
      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-2">
        Considering the current scenario of the world regarding global warming,
        wood frame construction is becoming popular due to being eco-friendly
        and a renewable source of energy. First-world countries like the USA are
        adopting it at a higher pace due to different qualities. When it comes
        to the structural framing of wood for any project you must consider
        several factors. For instance, the wood frame's durability, flexibility,
        and ease of handling. Wood is a complex material, and you must choose
        the right type of wood according to your budget, the weather of the
        area, etc. The right choice can only be made when consulting with the
        right construction estimating services. By consulting with a company
        that is known for its framing estimating services in the market one can
        easily complete its wood frame construction.
      </p>
    </>
  );
}

export default FramingImg;
