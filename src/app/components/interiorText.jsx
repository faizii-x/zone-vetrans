import React from "react";
import Link from "next/link";

function InteriorText() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-[70%] w-[90%] mt-8 gap-4">
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick1.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Flooring Takeoff Services
            </h5>
            <Link href="/trades/interior/flooring">
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
          Get accurate flooring estimates with us. Our services cover material takeoffs, bid estimates, and CAD drafting for seamless project planning. Trust our expertise for precise bids and successful project outcomes 
          </p>
        </div>
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick2.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Drywall Takeoff Services
            </h5>
            <Link href="/trades/interior/drywall">
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
          Streamline your project with our precise drywall estimates. From material takeoffs to bid estimates and CAD drafting, we ensure accurate planning for your projects. Trust our expertise for efficient project management and successful outcomes.
          </p>
        </div>
      </div>
    </>
  );
}

export default InteriorText;
