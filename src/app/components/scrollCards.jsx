"use client";
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "../../../public/png/slide1.png";
import Slide2 from "../../../public/png/slide2.png";
import Slide3 from "../../../public/png/slide3.png";
import Slide4 from "../../../public/png/slide4.png";
import Slide5 from "../../../public/png/slide5.png";
import Slide6 from "../../../public/png/slide6.png";

function ScrollCards() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#000000] p-16 mt-8">
        <div>
          <Slider {...settings}>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide1} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Developers
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                During the initial planning of construction projects, developers
                and investors need quantity estimates and precise material costs
                to assess the project's feasibility before investing time and
                money.
              </p>
            </div>

            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide2} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                General Contractors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                General Contractors often rely on us to validate bids from
                subcontractors before proceeding with any construction project,
                regardless of its configuration or delivery method.
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide3} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Homeowners & Builders
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Homebuilders and homeowners want to make sure their investment
                is worthwhile. Our estimators check the project and give a price
                estimate for materials to help them decide.
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide4} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Architects & Designers
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Architects must stay within their clients' budget when creating
                drawings. That's why we provide precise takeoffs.
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide5} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Subcontractors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                As a contractor, doing takeoffs and estimates can be
                time-consuming and disrupt productivity. That's why
                subcontractors often come to us for precise and detailed
                quantity takeoffs.
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide6} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Vendors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Our precise material takeoffs assist vendors in recommending the
                right quantities, promoting sales and long-term relationships.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ScrollCards;
