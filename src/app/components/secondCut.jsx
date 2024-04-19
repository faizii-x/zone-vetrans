import React from "react";
import Image from "next/image";
import Onemep from "../../../public/png/onemep.png";
import Twomep from "../../../public/png/twomep.png";
import Link from "next/link";

function SecondCut() {
  return (
    <>
      <div className="flex justify-center relative z-0 mb-24 mt-10 w-[50%] mx-auto show-large-screen">
        <Link href="/trades/mechanical/">
          <Image className="absolute xl:mt-12 lg:mt-[30px]" src={Onemep} />
        </Link>
        <Link href="/trades/mep/gutter/">
          <Image className="" src={Twomep} />
        </Link>
      </div>
    </>
  );
}

export default SecondCut;
