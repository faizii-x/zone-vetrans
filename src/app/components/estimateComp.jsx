"use client";
import React from "react";
import Slider from "react-slick";

function EstimateComp() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: 1000,
    slidesPerRow: 1,
    slidesToShow: 1,
    infinite: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:w-[90%] w-[94%] mx-auto mt-[40px] z-10">
        <h1 className="text-[30px] font-bold ">Estimating fee</h1>
        <Slider {...settings}>
          <div className="w-full bg-blacks rounded-lg lg:p-16 p-6 mt-6">
            <h2 className="text-white text-[22px] font-bold">Our Process</h2>
            <h4 className="text-white mt-2">Project</h4>
            <div className="slider-flex-div mt-2">
              <p className="text-white text-[18px] mt-2 mb-3">
                Avail yourself of the option to either upload your plans
                directly or forward them via email to{" "}
                <a
                  className="underline hover:text-red"
                  href="mailto:Dave@procoreestimators.com"
                >
                  {" "}
                  af@veteransestimators.com
                </a>
              </p>

              <button className="border border-black mx-auto rounded-md text-[15px] bg-white w-[130px] h-[50px] hover:bg-red hover:text-white">
                Upload plans
              </button>
            </div>
          </div>
          <div className="w-full bg-blacks rounded-lg lg:p-16 p-6 mt-6">
            <h2 className="text-white text-[22px] font-bold">Our Process</h2>
            <h4 className="text-white mt-2">Reviewing</h4>

            <div className="slider-flex-div mt-2">
              <p className="text-white text-[18px] mb-2">
                Upon submission of the proposal, our team thoroughly examines
                the drawings provided by you.
              </p>

              <button className="border border-black mx-auto rounded-md bg-white text-[15px] w-[130px] h-[50px] hover:bg-red hover:text-white">
                Upload plans
              </button>
            </div>
          </div>
          <div className="w-full bg-blacks rounded-lg lg:p-16 p-6 mt-6">
            <h2 className="text-white text-[22px] font-bold">Our Process</h2>
            <h4 className="text-white mt-2">Approval</h4>

            <div className="slider-flex-div mt-2">
              <p className="text-white text-[18px] mb-3">
                Following our thorough review, we will furnish you with a
                comprehensive fee proposal for your careful consideration and
                approval.
              </p>

              <button className="border border-black mx-auto rounded-md text-[15px] bg-white w-[130px] h-[50px] hover:bg-red hover:text-white">
                Upload plans
              </button>
            </div>
          </div>
          <div className="bg-blacks rounded-lg lg:p-16 p-6 mt-6">
            <h2 className="text-white text-[22px] font-bold">Our Process</h2>
            <h4 className="text-white mt-2">CRFI/Clarification</h4>

            <div className="slider-flex-div gap-12 mt-2">
              <p className="text-white text-[18px] mb-3">
                The RFI email will always be sent to you if anything is unclear
                in the plans/drawings/notes, or if required with your approval
                we can complete the job with appropriate assumptions.
              </p>

              <button className="border border-black mx-auto rounded-md bg-white text-[15px] lg:w-[190px] w-[130px] h-[50px] hover:bg-red hover:text-white">
                Upload plans
              </button>
            </div>
          </div>

          <div className="bg-blacks rounded-lg lg:p-16 p-6 mt-6">
            <h2 className="text-white text-[22px] font-bold">Our Process</h2>
            <h4 className="text-white mt-2">Submission</h4>

            <div className="slider-flex-div  mt-2">
              <p className="text-white text-[18px] mb-3">
                Our skilled team of estimators deliver estimates that includes
                the quantities and pricing for all materials and labor. Our
                estimate and takeoff sheet will be delivered in EXCEL format.
              </p>

              <button className="border border-black mx-auto rounded-md text-[15px] bg-white lg:w-[190px] w-[130px] h-[50px] hover:bg-red hover:text-white">
                Upload plans
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default EstimateComp;
