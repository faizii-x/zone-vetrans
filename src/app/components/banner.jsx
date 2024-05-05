"use client";
import React, { useState } from "react";
import Image from "next/image";
import Bghome from "../../../public/png/bghome.png";
import Blue from "../../../public/png/blue.png";
import White from "../../../public/png/white.png";
import Modal from "./modal";

function Banner() {
  const [hello, setHello] = useState(false);
  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Bghome.src})`,
          marginTop: "40px",
          padding: "50px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">
            <p className="sm:text-[26px] text-[16px] font-bold text-white text-center leading-[40px] sm:leading-[45px]">
              For a quick quote based on your project scope, call us at <br />
              <a className="underline text-red" href="tel:+1 917 300 1079">
                +1 917 300 1079
              </a>{" "}
              <br />
              or email us at{" "}
              <a
                className="underline text-red"
                href="mailto:someone670@gmail.com"
              >
                af@veteransestimators.com
              </a>
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div
              onClick={openModal}
              className="w-[230px] h-[60px] bg-red rounded-xl mt-6 flex justify-center items-center mx-auto cursor-pointer"
            >
              <button className="text-[18px] text-white font-bold">
                Upload Plans
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <Image
                onClick={openModal}
                className="cursor-pointer"
                src={Blue}
              />
              <Image
                onClick={openModal}
                className="cursor-pointer"
                src={White}
              />
            </div>
          </div>
        </div>
      </div>
      {hello && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Banner;
