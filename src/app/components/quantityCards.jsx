import React from "react";
import Image from "next/image";
import { QUANTITY_CARDS } from "@/data";

function QuantityCards() {
  return (
    <>
      <h2 className="text-[30px] font-bold w-[90%] text-center mt-16 mx-auto">
        We Provide Quantity Takeoff Services To Our Clients in All CSI
        Divisions:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24 w-[90%] container mx-auto">
        {QUANTITY_CARDS.map((x) => (
          <>
            <div className="bg-blacks p-4 rounded-lg mb-16">
              <Image className="-mt-16 mx-auto" src={x.img} />
              <h5 className="text-[16px] font-poppins font-bold text-white text-center mt-4">
                {x.heading}
              </h5>
              <p className="text-[15px] font-poppins font-light text-white text-center mt-2">
                {x.para}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default QuantityCards;
