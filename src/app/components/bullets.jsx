import React from "react";
import Image from "next/image";
import PicCard from "../../../public/png/picCard.png";
import PicCard1 from "../../../public/png/picCard1.png";

function Bullets() {
  return (
    <>
      <h2 className="text-[22px] font-bold text-center w-[90%] mx-auto mt-6">
        We Provide Quantity Takeoff Services To Our Clients In All CSI
        Divisions:
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] container mx-auto">
        <div className="mx-auto mt-6">
          <li className="text-[18px] font-medium font-poppins">
            Site Work Takeoff
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
      <div className="w-[70%] mx-auto relative show-div-2">
        <div className="flex justify-center mt-16 mb-24">
          <Image className="absolute top-12" src={PicCard1} />
          <Image className="" src={PicCard} />
        </div>
      </div>
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6 mx-auto hide-div-2">
        <div className="bg-blacks p-5 mb-3 rounded-md">
          <div className="flex justify-between gap-3">
            <h4 className="text-white text-[18px] font-poppins font-semibold">
              Quantities Takeoff
            </h4>
            <div className="hover:bg-red border border-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            </div>
          </div>
          <p className="text-white font-poppins font-light mt-3">
            Our team provides high Quality Takeoff Services to many construction
            companies. Our experienced team, equipped with the latest
            technologies and tools, provides fast and accurate quantity takeoff
            numbers for labor and material.
          </p>
        </div>
        <div className="bg-blacks p-5 mb-3 rounded-md">
          <div className="flex justify-between gap-3">
            <h4 className="text-white text-[18px] font-poppins font-semibold">
              Material Takeoff
            </h4>
            <div className="hover:bg-red border border-white w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            </div>
          </div>
          <p className="text-white font-poppins font-light mt-3">
            Our team provides high Quality Takeoff Services to many construction
            companies. Our experienced team, equipped with the latest
            technologies and tools, provides fast and accurate quantity takeoff
            numbers for labor and material.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bullets;
