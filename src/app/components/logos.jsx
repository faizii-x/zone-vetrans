import React from "react";
import Image from "next/image";
import Logo1 from "../../../public/png/logo1.png";
import Logo2 from "../../../public/png/logo2.png";
import Logo3 from "../../../public/png/logo3.png";
import Logo4 from "../../../public/png/logo4.png";
import Logo5 from "../../../public/png/logo5.png";
import Logo6 from "../../../public/png/logo6.png";

function Logos() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16 w-[90%] container mx-auto">
        <Image className="mt-4" src={Logo1} />
        <Image className="mt-3" src={Logo2} />
        <Image className="mt-2" src={Logo3} />
        <Image className="" src={Logo4} />
        <Image className="mt-4" src={Logo5} />
        <Image className="mt-4" src={Logo6} />
      </div>
    </>
  );
}

export default Logos;
