"use client";
import { useEffect, useState, useRef } from "react";
import Banner from "./components/banner";
import Hero from "./components/hero";
import HomeCard from "./components/homeCard";
import ParaSection from "./components/paraSection";
import ScrollCards from "./components/scrollCards";
import Start from "./components/start";
import Modal from "./components/modal";
import Image from "next/image";
import Num from "../../public/png/num.png";
import Msg from "../../public/png/msg.png";
import Face from "../../public/face.svg";
import Facebook from "../../public/facebook.svg";
import Buttonfix from "../../public/buttonfix.svg";
import Link from "../../public/link.svg";
import Homebig from "./components/homebig";
import Chatbot from "./components/chatbot";
import AccuracyComp from "./components/accuracyComp";
import NewComp from "./components/newComp";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [hello, setHello] = useState(false);
  const [bot, setBot] = useState(false);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  const openChat = () => {
    setBot(true);
  };

  const closeChat = () => {
    setBot(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      clearTimeout(timeoutId);

      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleBodyClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay p-4">
          <div ref={popupRef} className="popup-content border">
            <svg
              onClick={() => setShowPopup(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white hover:bg-red hover:rounded-3xl cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div className="flex justify-start gap-4 mt-4">
              <a className="" href="tel:+1 917 300 1079">
                <Image className="hover:border-y border-red" src={Num} />
              </a>
              <a className="" href="mailto:someone670@gmail.com">
                <p className="text-white font-medium text-[20px] hover:border-y border-red">
                  af@veteransestimators.com
                </p>
              </a>
            </div>

            <div className="flex justify-center gap-4 mt-3">
              <a
                href="https://www.instagram.com/veterans.estimator/"
                target="_blank"
              >
                <Image className="" src={Face} />
              </a>
              <a
                href="https://www.facebook.com/VeteransEstimator"
                target="_blank"
              >
                <Image className="" src={Facebook} />
              </a>
              <a href="linkedin.com/company/veteransestimators" target="_blank">
                <Image className="" src={Link} />
              </a>
            </div>

            <p className="text-[23px] text-center text-white font-bold p-3">
              AFFORDABLE ESTIMATES
            </p>
            <p className="text-[18px] text-white font-semibold p-6 text-center -mt-10">
              <span className="text-[23px] font-bold mt-1">(30% OFF)</span>{" "}
            </p>

            <div onClick={openModal} className="flex justify-center mb-4">
              <button className="bg-red w-[160px] h-[50px] text-white font-semibold text-[18px] rounded-md text-center">
                Upload plans
              </button>
            </div>
            <p className="text-[18px] text-white text-center font-normal mt-2 mb-3">
              TURNAROUND TIME 2-3 Days!
            </p>
          </div>
        </div>
      )}
      {hello && <Modal closeModal={closeModal} />}

      {/* <div onClick={openChat} className=" fixed bottom-8 right-8">
        <Image className=" w-[40px] h-[40px] cursor-pointer" src={Buttonfix} />
      </div>

      {bot && <Chatbot closeChat={closeChat} />} */}

      <Hero />
      <ParaSection />
      <HomeCard />
      <ScrollCards />
      <Homebig />
      <AccuracyComp />
      <NewComp />
      <Start />
      <Banner />
    </>
  );
}
