import React from 'react'
import Image from "next/image";
import Ther from "../../../public/png/ther.png"

function Thermo() {
  return (
    <>
      <h2 className="text-[20px] w-[90%] mx-auto mt-6 font-poppins font-bold">
        Thermal and Moisture Protection Takeoffs
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 mx-auto w-[90%] ">
        <div className="col-span-2 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">Dire retardant cable sprays takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Damproofing takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Waterproofing takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Chemical grouting takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Traffic coatings takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Fiber insulation takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Plastic insulation takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Cellulose insulation takeoffs
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Reflective insulation takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Cladding takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Roof and deck installation takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">EIFS( Exterior Insulation and Finish Systems) takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Weather Barriers takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Vapor Resistive Barriers takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Vapor Permeable Barriers takeoffs</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Steep Slope Roofing takeoffs</li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Ther} />
        </div>
      </div>
    
    </>
  )
}

export default Thermo