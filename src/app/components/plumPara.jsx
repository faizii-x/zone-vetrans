import React from "react";
import Image from "next/image";
import Renew from "../../../public/png/renew.png";

function PlumPara() {
  return (
    <>
      <h2 className="text-[24px] font-bold w-[90%] mx-auto mt-2">
        Residential Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto ">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal mx-auto mt-3">
            Whether you're a small-scale plumber or a large residential plumbing
            contractor, precise estimates are crucial for quoting prices,
            bidding on jobs, and procuring materials from local vendors.
          </p>

          <li className="text-[22px] font-poppins font-normal mt-1">
            Water Heaters
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Gas Lines
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Main Sewer Lines
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Water Lines
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Floor Drains & Laundries
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Garbage Disposal Ducts
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Domestic HVAC Systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Swimming Pool Plumbing
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Surface Trench Drains
          </li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <Image className="" src={Renew} />
        </div>
      </div>
    </>
  );
}

export default PlumPara;
