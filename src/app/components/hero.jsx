"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heroimg from "../../../public/heroimg.svg";
import Counter from "./counter";
import Modal from "./modal";

function Hero() {
  const [hello, setHello] = useState(false);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] container mx-auto mt-[160px]">
        <div className="col-span-1">
          <h1 className="text-[38px] font-poppins font-bold leading-[48px]">
          Expert Construction Estimating Services for Your Projects
          </h1>
          <p className="text-[26px] font-poppins font-medium leading-[38px] mt-3">
          Get accurate estimates for your projects with Veterans Estimators.
          </p>
          <div
            onClick={openModal}
            className="bg-red rounded-lg w-[180px] h-[60px] flex justify-center items-center cursor-pointer mt-8"
          >
            <button className="text-white text-[19px] font-bold ">
              Upload plans
            </button>
          </div>
          <Counter />
        </div>
        <div className="col-span-1">
          <Image className="mx-auto" src={Heroimg} />
        </div>
      </div>
      {hello && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Hero;
