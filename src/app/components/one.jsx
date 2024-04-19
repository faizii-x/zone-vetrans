import React from "react";
import Image from "next/image";
import Onee from "../../../public/png/onee.png";
import Two from "../../../public/png/two.png";
import Link from "next/link";

function One() {
  return (
    <>
      <div className="flex justify-center relative z-0 mb-24 w-[50%]  mx-auto show-large-screen">
        <Link href="/trades/electrical/">
          <Image className="absolute xl:mt-12 lg:mt-[30px]" src={Onee} />
        </Link>
        <Link href="/trades/mep/plumbing/">
          <Image className="" src={Two} />
        </Link>
      </div>
    </>
  );
}

export default One;
