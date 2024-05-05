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

function CostStyle() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <>

      <div className="w-[80%] mx-auto show-large-screen">
        <Slider {...settings}>
          <div className="md:flex grid justify-start mt-8 relative gap-4 p-4 mx-auto mb-16 ml-1">
            <div className="absolute left-4 lg:mt-[57px] mt-8 ">
              <Image className=" " src={Cost1} />
              <p className="-mt-[300px] ml-6 text-white text-[22px] font-bold font-poppins ">
                General Contractors
              </p>
              <p className="w-[40%] mt-[20px] ml-6 text-white text-[20px] font-poppins font-light">
                Ensure accuracy and speed with our efficient takeoff services!
                We assist in verifying subcontractor bids, providing reliable
                project cost estimates well before construction commences.
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost2} />
              <p className="absolute right-[370px] mt-[100px] top-0 ml-6 text-white text-[22px] font-bold font-poppins class-sett">
                Developers
              </p>
              <p className="absolute right-[80px] w-[40%] -mt-[320px] ml-6 text-white text-[20px] font-poppins font-light class-sett-1">
                Make smart decisions right from the beginning of your project.
                Trust our accurate material takeoffs to provide reliable cost
                estimates, ensuring you stay within budget and on track.
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
                We offer precise quantity takeoff services, ensuring budget
                adherence throughout blueprint development.
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost4} />
              <p className="absolute right-[225px] mt-[100px] top-0 ml-6 text-white text-[22px] font-bold font-poppins class-sett-11">
                Homeowners & Builders
              </p>
              <p className="absolute right-16 w-[40%] -mt-[320px] ml-6 text-white text-[20px] font-poppins font-light class-sett-12">
                Empowering you with detailed cost estimates for materials and
                labor, enabling informed decisions prior to project initiation.
              </p>
            </div>
          </div>
          {/* ......................................... */}

          <div className="md:flex grid justify-start mt-[100px] relative  p-4 mx-auto">
            <div className="absolute left-0 -top-[42px] lg:mt-[57px] mt-6">
              <Image className=" -mt-16" src={Cost5} />
              <p className="-mt-[220px] ml-12 text-white text-[22px] font-bold font-poppins">
                Vendors
              </p>
              <p className="w-[40%] mt-[20px] ml-12 text-white text-[20px] font-poppins font-light">
                Increase sales and foster trust with precise material estimates.
                Guide clients to avoid costly errors and minimize waste.
                Champion sustainability!
              </p>
            </div>

            <div className="">
              <Image className="" src={Cost6} />
              <p className="absolute right-[225px] mt-[70px] top-0 ml-6 text-white text-[22px] font-bold font-poppins class-sett-111">
                Subcontractors
              </p>
              <p className="absolute right-16 w-[40%] -mt-[330px] ml-6 text-white text-[20px] font-poppins font-light class-sett-122">
                Subcontractors, save time! Receive quick, precise quotes in 1-2
                days and cut estimating costs by 60%.
              </p>
            </div>
          </div>
        </Slider>

      </div>
      

    



    </>
  );
}

export default CostStyle;
