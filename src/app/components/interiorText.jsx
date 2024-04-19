import React from "react";
import Image from "next/image";
import Floorr from "../../../public/png/floorr.png";
import Dryyy from "../../../public/png/dryyy.png";
import Link from "next/link";

function InteriorText() {
  return (
    <>
       <div className="flex justify-center relative z-0 mb-24 p-2 w-[50%] mx-auto show-large-screen">
        <Link href="/trades/electrical/">
          <Image className="absolute xl:mt-12 lg:mt-[30px]" src={Floorr} />
        </Link>
        <Link href="/trades/mep/plumbing/">
          <Image className="" src={Dryyy} />
        </Link>
      </div>
    </>
  );
}

export default InteriorText;
