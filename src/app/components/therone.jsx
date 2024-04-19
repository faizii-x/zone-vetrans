import React from "react";
import Image from "next/image";
import Ther1 from "../../../public/png/ther1.png";
import Ther2 from "../../../public/png/ther2.png";
import Link from "next/link";

function Therone() {
  return (
    <>
       <div className="flex justify-center relative z-0 mb-24 mt-8 p-2 w-[50%] mx-auto show-large-screen">
        <Link href="/trades/electrical/">
          <Image className="absolute xl:mt-12 lg:mt-[30px]" src={Ther1} />
        </Link>
        <Link href="/trades/mep/plumbing/">
          <Image className="" src={Ther2} />
        </Link>
      </div>
    </>
  );
}

export default Therone;
