import Link from "next/link";
import React from "react";

function Bullets() {
  return (
    <>
      <h2 className="text-[22px] font-bold text-center w-[90%] mx-auto mt-6">
        We Provide Construction Takeoff Services To Our Clients In All CSI
        Divisions:
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] container mx-auto">
        <div className="mx-auto mt-6">
          <li className="text-[18px] font-medium font-poppins">
            Sitework Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Masonry Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Concrete Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Drywall Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Painting Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Insulation Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Roofing Takeoff
          </li>
        </div>

        <div className="mx-auto mt-6">
          <li className="text-[18px] font-medium font-poppins">
            Lumber Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Millwork Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Cabinet Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Mechanical Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">HVAC Takeoff</li>
          <li className="text-[18px] font-medium font-poppins">
            Plumbing Takeoff
          </li>
          <li className="text-[18px] font-medium font-poppins">
            Electrical Takeoff
          </li>
        </div>
      </div>
      {/* ............................... */}
    

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-[70%] w-[90%] mt-8 gap-4">
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick1.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Quantity Takeoff
            </h5>
            <Link href="/takeoff/quantity">
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
            Our team specializes in delivering top-notch Quantity Takeoff
            Services to construction firms. Using cutting-edge tools and
            expertise, we ensure swift and precise quantification of labor and
            materials. With our quick turnaround time, even urgent requests are
            fulfilled within 24 hours.
          </p>
        </div>
        <div
          className=" max-w-full h-auto bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${"/png/pick2.png"})` }}
        >
          <div className="flex justify-between gap-2 p-6">
            <h5 className="text-white text-[24px] font-poppins font-semibold">
              Material Takeoff
            </h5>
            <Link href="/takeoff/material">
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
            Our Material Takeoff service provides detailed assessments of
            required construction materials. With our skilled team and advanced
            tools, we swiftly and accurately calculate material quantities,
            ensuring efficient project planning and execution.
          </p>
        </div>
      </div>
      
    </>
  );
}

export default Bullets;
