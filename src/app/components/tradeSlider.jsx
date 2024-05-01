"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Trade1 from "../../../public/png/trade1.png";
import Trade2 from "../../../public/png/trade2.png";
import Trade3 from "../../../public/png/trade3.png";
import Trade4 from "../../../public/png/trade4.png";
import Link from "next/link";

function TradeSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                General Requirements
              </h4>
              <Link href="/trades/general">
                <div className="border border-white hover:bg-red hover:text-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="md:block hidden absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Our general requirement provide a comprehensive overview,
              analyzing your project needs and ensuring compliance with
              regulations. We deliver detailed estimates for materials, labor,
              and equipment, allowing for informed decisions and smooth project
              execution. Trust us for clear communication and on-budget
              completion.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Sitework Estimating
              </h4>
              <Link href="/trades/sitework">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className=" md:block hidden absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we empower sitework contractors, landscapers, developers,
              general contractors, and site contractors by offering more than
              just estimates. Our team of estimators utilizes the latest and
              cost-effective software to analyze drawings and plans accurately,
              providing precise material and labor takeoffs (including manhours)
              within 24-48 hours.
            </p>
            <Link href="/trades/sitework/landscape">
              <div className="absolute top-[310px] left-6 bg-red flex justify-center rounded-md w-[220px] h-[55px]">
                <button className="text-white">Landscaping Estimating</button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade3} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Concrete Estimating
              </h4>
              <Link href="/trades/concrete">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Our Concrete Estimating Services offer accurate and detailed
              estimates for all concrete aspects of your construction project.
              Using advanced software and expertise, we provide precise
              calculations for materials, labor, equipment, and more. Whether
              it's for foundations, slabs, walls, or other concrete structures,
              we ensure clear cost understanding. Trust{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>{" "}
              for dependable concrete estimating services that help you plan and
              budget effectively.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Masonry Estimating
              </h4>
              <Link href="/trades/masonry">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Choose{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>{" "}
              for excellent masonry estimating solutions. With nationwide
              experience, we provide accurate and timely estimates. Our skilled
              masonry cost estimator focuses on Division 4, including brickwork,
              CMU walls, and diverse masonry styles. Using tools like OST,
              Planswift, and Bluebeam, our dedicated team ensures precise
              evaluations. Contact us at{" "}
              <a
                className="underline hover:text-red hover:font-bold"
                href="tel:+1 917 300 1079"
              >
                {" "}
                +1 917 300 1079
              </a>{" "}
              or email{" "}
              <a
                className="underline hover:text-red hover:font-bold"
                href="mailto:someone670@gmail.com"
              >
                {" "}
                (Dave@procoreestimators.com)
              </a>{" "}
              to begin."
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Metals Estimating
              </h4>
              <Link href="/trades/metals">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we specialize in accurate metal estimating services for
              construction projects, understanding the crucial role of metals in
              structural integrity and aesthetics. Our tailored estimates
              guarantee precision, perfectly aligned with your project
              requirements.
            </p>
            <Link href="/trades/metals/rebar">
              <div className="absolute top-[310px] left-6 bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                <button className="text-white">
                  Rebar Estimating Services
                </button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Lumber Takeoff
              </h4>
              <Link href="/trades/lumber">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              We're experts in providing quality wood and plastic materials for
              construction projects. With our wide range and expert guidance,
              your projects get the best materials, natural or man-made.
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-6 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Thermal & Moist Protection Estimating
              </h4>
              <Link href="/trades/thermal">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we understand the importance of thermal and moisture protection
              in construction. Our expertise ensures your project is equipped to
              handle environmental challenges, safeguarding its durability. Let
              us help you plan effectively and choose the right materials for
              your project's needs.
            </p>
            <div className="flex justify-between gap-3 absolute top-[310px] left-6">
              <Link href="/trades/thermal/roofing">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2 cursor-pointer">
                  <button className="text-white">
                    Roofing Estimating Services
                  </button>
                </div>
              </Link>
              <Link href="/trades/thermal/insulating">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2 cursor-pointer">
                  <button className="text-white">
                    Insulation Estimating Services
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Framing Estimating
              </h4>
              <Link href="/trades/framing">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Framing estimating services offer detailed cost breakdowns, aiding
              informed decisions and ensuring timely project completion for
              client satisfaction. Accurate estimates empower sound financial
              decisions, preventing budget and time constraints, and ensuring a
              successful construction experience.
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Interior & Exterior Finishes
              </h4>
              <Link href="/trades/interior">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Elevate Your Project with Premium Interior & Exterior Finishing
              Solutions. Our experienced team specializes in delivering
              high-quality finishes using top-grade materials, meticulously
              selected for their durability, aesthetic appeal, and longevity.
              Whether it's interior detailing or exterior cladding, trust us to
              enhance the beauty and functionality of your space with our expert
              craftsmanship.
            </p>
            <div className="flex justify-between gap-3 absolute top-[310px] left-6">
              <Link href="/trades/interior/drywall">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                  <button className="text-white">
                    Drywall Estimating Services
                  </button>
                </div>
              </Link>
              <Link href="/trades/interior/flooring">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                  <button className="text-white">
                    Flooring Estimating Services
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Specialties
              </h4>
              <Link href="/trades/specialties">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              There are many construction estimating services in the market, but
              they provide a limited number of options for the
              constructors. <span className="text-red font-semibold">Veterans Estimators</span> services are special when
              compared to the rest of the companies due to the following
              specialties Extensive range, Comprehensive and accurate Cost
              Estimating, Material takeoff, Construction Scheduling, etc
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Equipment Estimating
              </h4>
              <Link href="/trades/equipment">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Estimating equipment costs is crucial for project planning. At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we provide accurate Equipment Estimating services tailored to
              your needs. Our assessments consider rental rates, fuel costs, and
              maintenance expenses, ensuring efficient project execution within
              budget.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Furnishing Estimating
              </h4>
              <Link href="/trades/furnishing">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we offer Furnishings Estimating services tailored to your
              project requirements. Our expertise ensures accurate assessments
              of furnishings costs, including furniture, fixtures, and
              decorative items. Trust us to provide comprehensive estimates to
              enhance the aesthetic appeal and functionality of your space.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Special Construction Estimating
              </h4>
              <Link href="/trades/specialConstruction">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>{" "}
              offers Special Construction Estimating services tailored to your
              unique project needs. Whether it's special materials or complex
              designs, our team provides accurate estimates to ensure your
              project's success. Trust us for precise assessments that make your
              special construction projects a breeze.
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Conveying System Estimating
              </h4>
              <Link href="/trades/convey">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Get accurate estimates for your conveying systems with{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              . Our expert team ensures precise calculations for all your
              conveyor needs, helping you plan and budget effectively for your
              projects.
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                MEP Estimating
              </h4>
              <Link href="/trades/mep">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we specialize in precise evaluations for transportation systems
              across industries. Our dedicated team ensures optimal transport
              solutions for enhanced efficiency and productivity.
            </p>
            <div className="flex justify-between gap-3 absolute top-[260px] left-6">
              <Link href="/trades/mep/">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                  <button className="text-white">
                    Mechanical Estimating Services
                  </button>
                </div>
              </Link>
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Electrical Estimating Services
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-3 absolute top-[320px] left-6">
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Plumbing Estimating Services
                </button>
              </div>
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Gutter Estimating Services
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                HVAC Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we excel in HVAC estimating services, delivering precise evaluations for
              heating, ventilation, and air conditioning systems. Trust us for
              accurate estimates tailored to your project needs.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Commercial Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we specialize in commercial estimating services, providing detailed and
              accurate cost assessments for a wide range of commercial
              construction projects. Trust us for reliable estimates that meet
              your project requirements.
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Industrial Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we excel in industrial estimating services, offering precise and
              comprehensive cost evaluations for diverse industrial projects.
              Rely on our expertise for accurate estimates tailored to your
              industrial construction needs.
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Residential Estimating
              </h4>
              <div className="border border-white hover:bg-red hover:text-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <Link href="/trades/residential">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer hover:bg-red"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              At{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>
              , we specialize in residential estimating services, providing detailed and
              accurate cost assessments for residential construction projects.
              Trust our experienced team to deliver precise estimates tailored
              to your specific residential needs.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TradeSlider;
