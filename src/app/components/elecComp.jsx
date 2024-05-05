import React from "react";
import Image from "next/image";
import Elec2 from "../../../public/png/elec2.png";
import Elec3 from "../../../public/png/elec3.png";

function ElecComp() {
  return (
    <>
      <h2 className="text-[24px] font-bold mt-8 w-[90%] mx-auto">
        Residential Electrical Estimating Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-1 gap-6 w-[90%] mx-auto">
        <div className="col-span-2 ">
          <p className="text-[22px] font-poppins font-normal">
            If you're involved in home-based electrical projects, our services
            can provide valuable electrical projections for procurement and
            tendering. Our dedicated team specializes in residential electrical
            estimating for various projects, including home enhancements, new
            constructions, eco-friendly homes, smart houses, and more.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <Image className="mx-auto" src={Elec2} />
        </div>
      </div>
      {/* ...................................... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] mx-auto">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <Image className="mx-auto" src={Elec3} />
        </div>
        <div className="col-span-2 ">
          <h2 className="text-[24px] font-bold mt-8 ">
            Commercial Electrical Estimating Services
          </h2>
          <p className="text-[22px] font-poppins font-normal">
            As a commercial electrical contractor, you face tight deadlines and
            budgets. Our goal is to ease your workload with timely and accurate
            electrical estimating services. Our experienced estimators use
            advanced software to determine project costs, covering all
            electrical components needed for comprehensive bid proposals.
          </p>
        </div>
      </div>
    </>
  );
}

export default ElecComp;
