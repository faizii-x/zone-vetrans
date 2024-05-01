"use client"
import React, {useState} from "react";
import Modal from "./modal";

function Start() {

  const [hello, setHello] = useState(false);


  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <h2 className="text-[30px] font-bold w-[75%] mx-auto mt-8">
        Way To Start
      </h2>
      <div className="w-[60%] mx-auto mt-8 ">
        <ol class="relative  border-s border-dashed border-red ">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                <p className="text-white text-[18px] font-bold">1</p>
              </div>
            </span>
            <h3 class="font-medium text-[18px] font-poppins leading-tight">
              Project
            </h3>
            <p class="text-[16px] font-poppins">
              You can upload yo ur plans{" "}
              <span onClick={openModal} className="underline text-[16px] font-bold cursor-pointer text-blue-700">
                here
              </span>{" "}
              or email us at Example@gmail.com. Whichever is more convenient for
              you.
              <br /> Be sure to let us know your scope of work and any details
              regarding your project.
            </p>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                <p className="text-white text-[18px] font-bold">2</p>
              </div>
            </span>
            <h3 class="font-medium text-[18px] leading-tight">Reviewing</h3>
            <p class="text-[16px] font-poppins">
              Our team will review your project.
            </p>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                <p className="text-white text-[18px] font-bold">3</p>
              </div>
            </span>
            <h3 class="font-medium text-[18px] leading-tight">Estimation</h3>
            <p class="text-[16px] font-poppins">
              Our team will takeoff and estimate your project.
            </p>
          </li>
          <li class="ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                <p className="text-white text-[18px] font-bold">4</p>
              </div>
            </span>
            <h3 class="font-medium text-[18px] leading-tight">Proposal</h3>
            <p class="text-[16px] font-poppins">
              Before starting, we’ll send you a detailed quote for our services.
              Every client is unique so we take the time
              <br /> to review each situation individually. We’ll factor in
              things like project range, difficulty, trades, and more.
            </p>
          </li>
        </ol>
      </div>

      <p className="w-[90%] mx-auto mt-12 text-[22px] font-poppins font-semibold text-center">
        Proudly providing a variety of estimating services for any size
        construction company involved withResidential and Commercial projects .
        Veterans Estimators® Provides Professional Cost Opinions for Conceptual,
        Design, Construction, Hard Bids , Takeoffs and Estimating Assistance.
      </p>
      {hello && <Modal closeModal={closeModal} />}

    </>
  );
}

export default Start;
