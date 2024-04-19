import React, { useEffect, useState } from "react";
import Image from "next/image";
import Group from "../../../public/png/group.png";
import Accuracy from "../../../public/accuracy.svg";
import Dedication from "../../../public/dedication.svg";
import Reliability from "../../../public/reliabilty.svg";
import Efficiency from "../../../public/efficiency.svg";

function Homebig() {
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue =
        window.scrollY || document.documentElement.scrollTop;

      setScrollValue(currentScrollValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="show-large-screens relative">
        <Image className="mx-auto mt-[300px] w-[40%] h-[auto]" src={Group} />

        {scrollValue > 1900 && (
          <div className="absolute -top-[240px] left-[300px]">
            <Image className="w-full h-[220px]" src={Accuracy} />
            <h6 className="text-[33px] text-white absolute">Head</h6>
          </div>
        )}

        {scrollValue > 2100 && (
          <div className="absolute -top-[240px] right-[300px]">
            <Image className="w-full h-[220px]" src={Dedication} />
          </div>
        )}

        {scrollValue > 2300 && (
          <div className="absolute -bottom-[240px] left-[300px]">
            <Image className="w-full h-[220px]" src={Reliability} />
          </div>
        )}

        {scrollValue > 2600 && (
          <div className="absolute -bottom-[240px] right-[300px]">
            <Image className="w-full h-[220px]" src={Efficiency} />
          </div>
        )}
      </div>
    </>
  );
}

export default Homebig;
            