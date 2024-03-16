import React from "react";
import Image from "next/image";
import Mech from "../../../public/png/mech.png";

function MechanicalText() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        What Do We Quantify In Mechanical Takeoffs?
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        We have a team of specialized mep estimators who have the expertise in
        using the latest mechanical takeoff software like fastpipe, fastduct,
        fastwrap, trimble, accubid, planswift, etc. Following items are
        generally quantified in our mechanical takeoffs:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-2">
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air devices
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air handling units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air-cooled condensing units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Air conditioning units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Exhaust fans
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Manual volume damper
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Rooftop units
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
            Dust smoke detector
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Pump</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Louver</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Ducts</li>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Mech} />
        </div>
      </div>
      {/* ................................... */}

      <h2 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        Mechanical & Piping Insulation Estimating
      </h2>
      <p className="text-[22px] font-poppins font-normal w-[90%] mx-auto mt-3">
        An accurate estimate is crucial for mechanical insulation contractors in
        order to win more projects and get good profit margins. Let us digitally
        takeoff your insulation projects to properly measure the dimensions
        while taking into account various shapes such as round, oval, and
        rectangular pipes or ducts to ensure that you get an accurate cost
        estimate for material and labor. We develop estimates according to your
        specific mechanical estimation job and customize our deliverables as per
        your demand. Our estimating services for insulation include:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto mt-4">
        <div className="col-span-1 mb-3">
          <li className="text-[22px] font-poppins font-normal mt-1">
          Pipe insulation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Ductwork insulation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Cold storage insulation
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Boiler & turbine
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Acoustic systems
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Fireproofing
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Firestopping
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">
          Weatherproofing
          </li>
          <li className="text-[22px] font-poppins font-normal mt-1">Moisture barrier</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Tank insulation systems</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Removable insulation systems</li>
          <li className="text-[22px] font-poppins font-normal mt-1">Equipment insulation systems</li>
          
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 self-center">
          <Image className="mx-auto" src={Mech} />
        </div>
      </div>

    </>
  );
}

export default MechanicalText;
