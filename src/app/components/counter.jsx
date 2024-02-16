"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Counter() {
  const formatValue = (value) => `${value}`;
  const [isAnimated, setIsAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  const handleScroll = () => {
    const element = counterRef.current;

    if (element) {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const resetAnimation = () => {
    setIsAnimated(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[70px]">
        <div>
          <div
            ref={counterRef}
            onClick={resetAnimation}
            className={`flex justify-center gap-3 ${
              isAnimated ? "animate" : ""
            }`}
          >
            <CountUp
              className="text-black mt-2 text-[32px] font-bold"
              start={0}
              end={150}
              duration={15}
              formattingFn={formatValue}
              redraw={true}
            />
            <p className="text-[38px] font-bold">+</p>
          </div>
          <div className="bg-red h-[45px] flex justify-center items-center red-border-circle">
            <p className="text-white">Estimators Staff</p>
          </div>
        </div>

        <div>
          <div
            ref={counterRef}
            onClick={resetAnimation}
            className={`flex justify-center gap-3 ${
              isAnimated ? "animate" : ""
            }`}
          >
            <CountUp
              className="text-black mt-2 text-[32px] font-bold"
              start={0}
              end={1000}
              duration={15}
              formattingFn={formatValue}
              redraw={true}
            />
            <p className="text-[38px] font-bold">+</p>
          </div>

          <div className="bg-red h-[45px] flex justify-center items-center red-border-circle">
            <p className="text-white">Clients</p>
          </div>
        </div>

        <div>
          <div
            ref={counterRef}
            onClick={resetAnimation}
            className={`flex justify-center gap-3 ${
              isAnimated ? "animate" : ""
            }`}
          >
            <CountUp
              className="text-black mt-2 text-[32px] font-bold"
              start={0}
              end={3500}
              duration={15}
              formattingFn={formatValue}
              redraw={true}
            />
            <p className="text-[38px] font-bold">+</p>
          </div>
          <div className="bg-red h-[45px] flex justify-center items-center red-border-circle">
            <p className="text-white">Projects</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
