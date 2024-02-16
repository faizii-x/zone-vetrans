"use client"
import React, {useState} from "react";
import Modal from "./modal";

function EstimateTwo() {

    const [hello, setHello] = useState(false);
    const openModal = () => {
      setHello(true);
    };
  
    const closeModal = () => {
      setHello(false);
    };
  
  


  return (
    <>
      <div className="lg:w-[90%] w-[95%] mx-auto mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 container mx-auto">
          <div className="col-span-2">
            <div className="bg-blacks rounded-lg p-6">
              <p className="text-[22px] font-poppins font-bold text-white">
                Get a quote now
              </p>
              <p className="text-white text-[18px] font-poppins mt-2">
                We will send you a quote that includes the delivery time and
                date, and invoice. You can pay the amount through debit card,
                PayPal, credit card and begin with the estimate
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-blacks rounded-lg p-6">
              <p className="text-[22px] font-poppins font-bold text-white">
              Get your Estimate
              </p>
              <p className="text-white text-[18px] font-poppins mt-[6px]">
                Our customer support team will manage to send you a final gutter
                estimate in EXCEL format.
              </p>
            </div>
          </div>
        </div>


        <div className="mt-12">
            <h2 className="text-[26px] font-bold font-poppins text-center mt-3">
              Upload your plans here
            </h2>
            <p className="text-[16px] font-poppins font-light text-center mt-3">
              TURNAROUND TIME 2-3 Days!
            </p>
            <p className="text-[16px] font-poppins font-light text-center mt-1">
              Affordable Estimate (30% off)
            </p>
            <div onClick={openModal} className="bg-red mb-8 rounded-lg w-[180px] h-[60px] mx-auto flex justify-center items-center cursor-pointer mt-8">
              <button className="text-white text-[19px] font-bold ">
                Upload plans
              </button>
            </div>
          </div>


      </div>
      {hello && <Modal closeModal={closeModal} />}

    </>
  );
}

export default EstimateTwo;
