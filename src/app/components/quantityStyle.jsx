"use client";
import React from "react";
import Image from "next/image";
import Cost1 from "../../../public/png/cost1.png";
import Cost2 from "../../../public/png/cost2.png";
import Cost3 from "../../../public/png/cost3.png";
import Cost4 from "../../../public/png/cost4.png";
import Cost5 from "../../../public/png/cost5.png";
import Cost6 from "../../../public/png/cost6.png";
import Slider from "react-slick";

function QuantityStyle() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: 1000,
    slidesPerRow: 1,
    slidesToShow: 1,
    infinite: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <>
      <div className="w-[60%] mx-auto show-large-screen">
        <Slider {...settings}>
          <div className="md:flex grid justify-start mt-8 relative gap-4 p-4 mx-auto mb-16 ml-1">
            <div className="absolute left-4 lg:mt-[57px] mt-8 ">
              <Image className=" " src={Cost1} />
              <p className="-mt-[300px] ml-6 text-white text-[22px] font-bold font-poppins">
                General Contractors
              </p>
              <p className="w-[40%] mt-[20px] ml-6 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost2} />
              <p className="absolute right-[370px] mt-[100px] top-0 ml-6 text-white text-[22px] font-bold font-poppins">
                Developers
              </p>
              <p className="absolute right-16 w-[40%] -mt-[270px] ml-6 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>
          </div>
          {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

          <div className="md:flex grid justify-start mt-8 relative  p-4 mx-auto">
            <div className="absolute left-4 lg:mt-[57px] mt-8">
              <Image className=" " src={Cost3} />
              <p className="-mt-[300px] ml-6 text-white text-[22px] font-bold font-poppins">
                Architects & Designers
              </p>
              <p className="w-[40%] mt-[20px] ml-6 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost4} />
              <p className="absolute right-[225px] mt-[100px] top-0 ml-6 text-white text-[22px] font-bold font-poppins">
                Homeowners & Builders
              </p>
              <p className="absolute right-16 w-[40%] -mt-[270px] ml-6 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>
          </div>
          {/* ......................................... */}

          <div className="md:flex grid justify-start mt-16 relative  p-4 mx-auto">
            <div className="absolute left-0 -top-[42px] lg:mt-[57px] mt-6">
              <Image className=" -mt-16" src={Cost5} />
              <p className="-mt-[220px] ml-12 text-white text-[22px] font-bold font-poppins">
                Vendors
              </p>
              <p className="w-[40%] mt-[20px] ml-12 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost6} />
              <p className="absolute right-[225px] mt-[70px] top-0 ml-6 text-white text-[22px] font-bold font-poppins">
                Subcontractors
              </p>
              <p className="absolute right-16 w-[40%] -mt-[270px] ml-6 text-white text-[20px] font-poppins font-light">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default QuantityStyle;
