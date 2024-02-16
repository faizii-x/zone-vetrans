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
                At the early stages of planning of the construction project,
                developers and investors require quantity takeoffs and accurate
                material costs to analyze that if the project is worth investing
                time and money.
              </p>
            </div>

            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide2} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                General Contractors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                General Contractors usually reach out to us for verifying their
                bids submitted by their subcontractors before undertaking any
                project in any construction configuration and project delivery
                methods.
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide3} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Homeowners & Builders
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Homebuilders and owners want to know if their investment is
                worth starting. Our estimator’s takeoff the project and give the
                estimated pricing of a project for material
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide4} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Architects & Designers
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Architects have to strictly remain within the budget limit of
                their clients while preparing the drawing plans. Therefore, we
                supply accurate takeoffs
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide5} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Subcontractors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Being a contractor, performing takeoffs and estimates is always
                time-consuming and disrupt productivity. Therefore, many
                subcontractors approach us for precise and detailed quantity
                takeoffs
              </p>
            </div>
            <div className=" mt-8">
              <Image className=" mx-auto " src={Slide6} />
              <h4 className="text-center text-white text-[20px] font-poppins font-semibold mt-3">
                Vendors
              </h4>
              <p className="text-[18px] text-white font-poppins font-light text-center p-4">
                Our precise material takeoffs help vendors and retailers to
                recommend the right material quantities to meet their client’s
                needs which promote sales and long-term business relations.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ScrollCards;
