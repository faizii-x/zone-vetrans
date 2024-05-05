import Link from "next/link";
import React from "react";


function MepStyle() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-[70%] w-[90%] mt-8 gap-4">
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick1.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Electrical Estimating Services
            </h5>
            <Link href="/our-trades/electrical-estimating-services">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[36px] h-[36px] text-white hover:text-red cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          </div>
          <p className="p-6 text-white font-poppins font-light -mt-10">
            We offer accurate estimating solutions for electric systems in
            various projects. Our services include material takeoffs, bid
            estimates, electrical cost per square foot, and CAD drafting. With
            precise estimates and thorough bid preparations, we ensure
            successful project planning and bids.
          </p>
        </div>
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick2.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Plumbing Estimating Services
            </h5>
            <Link href="/our-trades/mep-estimating-services/plumbing-estimating-services">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[36px] h-[36px] text-white hover:text-red cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          </div>
          <p className="p-6 text-white font-poppins font-light -mt-10">
            For plumbing projects, we cover everything from new installations to
            repairs, catering to residential, commercial, and industrial needs.
            Our estimates provide comprehensive details, allowing effective
            bidding, profit margin setting, and material procurement.
          </p>
        </div>
      </div>
    </>
  );
}

export default MepStyle;
