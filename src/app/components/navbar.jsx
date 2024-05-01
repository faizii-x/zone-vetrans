"use client";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { useState } from "react";
import Example from "./example";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FILTER_ARRAY } from "@/data";

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleEnter = () => {
    setIsShow(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleLeave = () => {
    setIsShow(false);
  };

  // const filterLinks = () => {
  //   const filterArray = FILTER_ARRAY.filter((x) =>
  //     x.title.toLowerCase().includes(input.toLowerCase())
  //   );
  //   return filterArray;
  // };

  const filterLinks = () => {
    const filterArray = FILTER_ARRAY.filter((x) =>
      x.title.toLowerCase().includes(input.toLowerCase())
    );
    return filterArray.flatMap((x) => [...(x.subTrades || []), x]);
  };

  return (
    <>
      <div className="bg-[#212121] w-[96%] rounded-full mx-auto mt-6 p-2 nav-fix">
        <div className="flex justify-between gap-12 ml-4 mr-4">
          <Link href="/">
            <Image
              className="cursor-pointer mx-auto w-[100%] h-[70px] "
              src={Logo}
            />
          </Link>

          <div className="hidden lg:block div-hide">
            <div className="flex justify-center gap-6 mt-6 ">
              <Link href="/">
                <h2 className="text-[16px] text-white font-poppins font-normal ">
                  {pathname === "/" ? (
                    <div className=" text-red ">Home</div>
                  ) : (
                    "Home"
                  )}
                </h2>
              </Link>

              <Link href="/services">
                <h2 className="text-[16px] text-white font-poppins font-normal">
                  {pathname === "/services" ? (
                    <div className=" text-red">Services</div>
                  ) : (
                    "Services"
                  )}
                </h2>
              </Link>

              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-start gap-1 cursor-pointer">
                  <Link href="/trades">
                    <h2 className="text-[16px] text-white font-poppins font-normal ">
                      {pathname === "/trades" ? (
                        <div className=" text-red">Trades</div>
                      ) : (
                        "Trades"
                      )}
                    </h2>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-white mt-[5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {isHovered && (
                  <div className=" absolute bg-gray-200 rounded-md shadow-lg p-6 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[690px] ">
                      {filterLinks().map((x) => (
                        <>
                          <Link href={x.link}>
                            <h2 className=" text-[14px] ml-3 text-black font-normal font-poppins mt-2 cursor-pointer hover:text-red hover:font-bold">
                              {x.title}
                            </h2>
                            {x?.subTrades?.map((subX) => (
                              <Link href={subX.link}>
                                <h2 className=" text-[12px] ml-3 text-black font-light font-poppins  cursor-pointer hover:text-red hover:font-bold">
                                  {subX.para}
                                </h2>
                              </Link>
                            ))}
                          </Link>
                        </>
                      ))}

                 


                    </div>
                  </div>
                )}
              </div>
              <Link href="/about">
                <div className="flex justify-start gap-1">
                  <h2 className="text-[16px] text-white font-poppins font-normal ">
                    {pathname === "/about" ? (
                      <div className=" text-red">About Us</div>
                    ) : (
                      "About Us"
                    )}
                  </h2>
                </div>
              </Link>

              <Link href="/payment">
                <h2 className="text-[16px] text-white font-poppins font-normal  ">
                  {pathname === "/payment" ? (
                    <div className=" text-red"> Payment</div>
                  ) : (
                    "Payment"
                  )}
                </h2>
              </Link>

              <Link href="/testimonials">
                <h2 className="text-[16px] text-white font-poppins font-normal ">
                  {pathname === "/testimonials" ? (
                    <div className=" text-red"> Testimonials</div>
                  ) : (
                    "Testimonials"
                  )}
                </h2>
              </Link>

              <Link href="/estimation">
                <h2 className="text-[16px] text-white font-poppins font-normal ">
                  {pathname === "/estimation" ? (
                    <div className=" text-red"> Estimating fee</div>
                  ) : (
                    " Estimating fee"
                  )}
                </h2>
              </Link>

              <Link href="/contact">
                <h2 className="text-[16px] text-white font-poppins font-normal ">
                  {pathname === "/contact" ? (
                    <div className=" text-red"> Contact Us</div>
                  ) : (
                    " Contact Us"
                  )}
                </h2>
              </Link>
            </div>
          </div>

          <div className="mt-3 hidden lg:block div-hide cursor-pointer ">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search Trades....."
                className="w-full h-[45px] rounded-full pl-4"
              />
              <div className="bg-red div-border w-[60px] h-[45px] absolute top-[0px] right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white mx-auto mt-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            {input.length > 0 && (
              <div className="absolute w-[230px] h-auto bg-hover rounded-md ml-2 p-4">
                {filterLinks().map((x) => (
                  <>
                    <Link href={x.link}>
                      <h2 className=" text-[16px] text-white font-medium font-poppins cursor-pointer hover:font-bold">
                        {x.title}
                      </h2>
                    </Link>
                  </>
                ))}
              </div>
            )}
          </div>

          <div className="flex xl:hidden justify-end mt-5">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-red rounded-md text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <Example open={open} setOpen={handleOnClose} />
      </div>
    </>
  );
}

export default Navbar;
