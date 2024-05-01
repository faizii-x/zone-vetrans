import React from "react";
import Image from "next/image";
import Footlogo from "../../../public/png/footlogo.png";
import Vector from "../../../public/Vector.svg";
import Call from "../../../public/call.svg";
import Message from "../../../public/message.svg";
import Zone from "../../../public/png/zone.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-[#EDF2F4] p-8 mt-6">
        <div className="w-[90%] mx-auto">
          <Link href="/">
          <Image className="cursor-pointer " src={Footlogo} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 lg:w-[90%] w-full container mx-auto border-b-2 border-black pb-6">
          <div>
            <p className="text-[14px] font-poppins">
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>{" "}
              are an industry leader in providing accurate and reliable
              construction cost estimating services. We specialize in Construction Takeoff services,CPM Scheduling, and Planning for your project
              management needs. Our experts use advanced softwares and we pay
              close attention to detail to ensure accurate estimates. We provide
              you with accurate information in a timely manner, enabling you to
              make informed decisions and execute projects efficiently. Rely on{" "}
              <span className="text-red font-semibold">
                Veterans Estimators
              </span>{" "}
              for precise and prompt cost estimating in construction.
            </p>
          </div>
          <div className="mx-auto">
            <div className="flex justify-start gap-2">
              <Image className=" w-[15px] h-[15px] mt-[2px]" src={Vector} />
              <p className="text-[14px]">
                2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-5">
              <Image className=" w-[15px] h-[15px] mt-[2px]" src={Call} />
              <a
                className="underline hover:text-red"
                href="tel:+1 917 300 1079"
              > <p className="text-[14px]">+1 917 300 1079</p></a>
            </div>
            <div className="flex justify-start gap-2 mt-5">
              <Image className=" w-[15px] h-[15px] mt-[2px]" src={Message} />
              <a
                className="underline hover:text-red"
                href="mailto:someone670@gmail.com"
              >  <p className="text-[14px]">BiddingHelp@planhubestimating.com</p></a>
            </div>
          </div>
        </div>
        <div className="sm:flex grid justify-center  mt-4">
          <div>
          <p>Copyright © 2024 <span className="text-red font-semibold">Veterans Estimators</span> Designed By -</p>
          </div>
          <div>
          <Image className="cursor-pointer sm:block mx-auto " src={Zone} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
