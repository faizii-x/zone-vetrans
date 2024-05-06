"use client";
import Logo from "../../../public/png/loggo.png";
import Image from "next/image";
import { useState } from "react";
import Example from "./example";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { FILTER_ARRAY } from "@/data";

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHoverTwo, setIsHoverTwo] = useState(false);
  const [isHoverThree, setIsHoverThree] = useState(false);
  const [isHoverFour, setIsHoverFour] = useState(false);
  const [isHoverFive, setIsHoverFive] = useState(false);
  const [isHoverSix, setIsHoverSix] = useState(false);
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
  const handleMouseEnterTwo = () => {
    setIsHoverTwo(true);
  };
  const handleMouseLeaveTwo = () => {
    setIsHoverTwo(false);
  };
  const handleMouseEnterThree = () => {
    setIsHoverThree(true);
  };
  const handleMouseLeaveThree = () => {
    setIsHoverThree(false);
  };

  const handleMouseEnterFour = () => {
    setIsHoverFour(true);
  };
  const handleMouseLeaveFour = () => {
    setIsHoverFour(false);
  };
  const handleMouseEnterFive = () => {
    setIsHoverFive(true);
  };
  const handleMouseLeaveFive = () => {
    setIsHoverFive(false);
  };
  const handleMouseEnterSix = () => {
    setIsHoverSix(true);
  };
  const handleMouseLeaveSix = () => {
    setIsHoverSix(false);
  };

  // const filterLinks = () => {
  //   const filterArray = FILTER_ARRAY.filter((x) =>
  //     x.title.toLowerCase().includes(input.toLowerCase())
  //   );
  //   return filterArray.flatMap((x) => [...(x.subTrades || []), x]);
  // };

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
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                  {pathname === "/" ? (
                    <div className=" text-red ">Home</div>
                  ) : (
                    "Home"
                  )}
                </h2>
              </Link>

              <Link href="/services">
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                  {pathname === "/services" ? (
                    <div className=" text-red">Services</div>
                  ) : (
                    "Services"
                  )}
                </h2>
              </Link>

              <div
                className="relative"
                onClick={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-start gap-1 cursor-pointer">
                  <Link href="/our-trades">
                    <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                      {pathname === "/Trades" ? (
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

                {/* {isHovered && (
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
                )} */}

                {isHovered && (
                  <div className="absolute bg-[#212121] rounded-md shadow-lg p-8 w-[910px] mt-1 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x ">
                      <div className="col-span-1 ">
                        <Link href="/our-trades/general-requirements/">
                          <h2 className="text-[14px] text-white font-normal cursor-pointer hover:text-[15px] hover:font-semibold hover:text-red">
                            General Requirements
                          </h2>
                        </Link>

                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterTwo}
                          onMouseLeave={handleMouseLeaveTwo}
                        >
                          <div className="flex justify-start gap-1 cursor-pointer">
                            <Link
                              href="/our-trades/sitework-estimating-services/"
                              className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-red cursor-pointer"
                            >
                              {pathname ===
                              "/our-trades/sitework-estimating-services/" ? (
                                <div className="text-red">Sitework</div>
                              ) : (
                                "Sitework"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-white mt-[20px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>

                          {isHoverTwo && (
                            <>
                              <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                <Link href="/our-trades/sitework-estimating-services/landscape-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                    Landscaping Estimating
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link href="/our-trades/concrete-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Concrete
                          </h2>
                        </Link>
                        <Link href="/our-trades/masonry-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Masonry
                          </h2>
                        </Link>
                      </div>
                      <div className="col-span-1 pl-6">
                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterThree}
                          onMouseLeave={handleMouseLeaveThree}
                        >
                          <div className="flex justify-start gap-1 cursor-pointer">
                            <Link
                              href="/our-trades/metals-estimating-services/"
                              className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname ===
                              "/our-trades/metals-estimating-services/" ? (
                                <div className="text-red">Metals</div>
                              ) : (
                                "Metals"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-white mt-[4px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>

                          {isHoverThree && (
                            <>
                              <div className="bg-white p-3 mt-3 rounded-md w-[260px] h-[45px] z-[999px]">
                                <Link href="/our-trades/metals-estimating-services/rebar-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                    Rebar Estimating Services
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link href="/our-trades/lumber-takeoff-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Lumber Takeoff
                          </h2>
                        </Link>

                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterFive}
                          onMouseLeave={handleMouseLeaveFive}
                        >
                          <div className="grid justify-start gap-0 cursor-pointer">
                            <Link
                              href="/our-trades/thermal-moisture-protection-estimating-services/"
                              className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] mt-3 font-normal hover:text-red cursor-pointer"
                            >
                              {pathname ===
                              "/our-trades/thermal-moisture-protection-estimating-services/" ? (
                                <div className="text-red">
                                  Thermal and Moisture Protection
                                </div>
                              ) : (
                                "Thermal and Moisture Protection"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-white mx-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>

                          {isHoverFive && (
                            <>
                              <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                <Link href="/our-trades/thermal-moisture-protection-estimating-services/roofing-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                    Roofing
                                  </li>
                                </Link>
                                <Link href="/our-trades/thermal-moisture-protection-estimating-services/Insulation-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal mt-1 hover:text-red">
                                    Insulation
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link href="/our-trades/framing-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Framing
                          </h2>
                        </Link>
                      </div>
                      <div className="col-span-1 pl-6">
                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterFour}
                          onMouseLeave={handleMouseLeaveFour}
                        >
                          <div className="flex justify-start gap-1 cursor-pointer">
                            <Link
                              href="/our-trades/interior-exterior-finishes/"
                              className="fonty hover:text-[15px] hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname ===
                              "/our-trades/interior-exterior-finishes/" ? (
                                <div className="text-red">Finishes</div>
                              ) : (
                                "Finishes"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-white mt-[4px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>

                          {isHoverFour && (
                            <>
                              <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                <Link href="/our-trades/interior-exterior-finishes/drywall-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                    Drywall Estimating
                                  </li>
                                </Link>
                                <Link href="/our-trades/interior-exterior-finishes/flooring-estimating-services/">
                                  <li className="text-[14px] hover:font-bold mt-1 font-normal hover:text-red">
                                    Flooring Estimating
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>

                        <Link href="/our-trades/specialties/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Specialties
                          </h2>
                        </Link>
                        <Link href="/our-trades/equipment-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Equipment
                          </h2>
                        </Link>
                        <Link href="/our-trades/furnishing-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Furnishing
                          </h2>
                        </Link>
                      </div>
                      <div className="col-span-1 pl-6">
                        <Link href="/our-trades/special-construction-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold cursor-pointer hover:text-red">
                            Special Construction
                          </h2>
                        </Link>
                        <Link href="/our-trades/conveying-systems/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Conveying Systems
                          </h2>
                        </Link>

                        <div
                          className="relative"
                          onMouseEnter={handleMouseEnterSix}
                          onMouseLeave={handleMouseLeaveSix}
                        >
                          <div className="flex justify-start gap-1 cursor-pointer">
                            <Link
                              href="/our-trades/mep-estimating-services"
                              className="fonty hover:text-[15px] mt-3 hover:font-semibold text-white font-inter text-[14px] font-normal hover:text-red cursor-pointer"
                            >
                              {pathname === "" ? (
                                <div className="text-red">MEP</div>
                              ) : (
                                "MEP"
                              )}
                            </Link>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-white mt-[15px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>

                          {isHoverSix && (
                            <>
                              <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[135px] z-[999px]">
                                <Link href="/our-trades/mechanical-estimating-services/">
                                  <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                    Mechanical
                                  </li>
                                </Link>

                                <Link href="/our-trades/electrical-estimating-services/">
                                  <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-red">
                                    Electrical
                                  </li>
                                </Link>

                                <Link href="/our-trades/mep-estimating-services/plumbing-estimating-services/">
                                  <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-red">
                                    Plumbing
                                  </li>
                                </Link>

                                <Link href="/our-trades/mep-estimating-services/gutter-estimating-services/">
                                  <li className="text-[14px] hover:font-bold mt-2 font-normal hover:text-red">
                                    Gutter
                                  </li>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-span-1 pl-6">
                        <Link href="/our-trades/hvac-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold cursor-pointer hover:text-red">
                            HVAC
                          </h2>
                        </Link>
                        <Link href="/our-trades/commercial-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Commercial Estimating
                          </h2>
                        </Link>
                        <Link href="/our-trades/industrial-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Industrial Estimating
                          </h2>
                        </Link>
                        <Link href="/our-trades/residential-estimating-services/">
                          <h2 className="text-[14px] text-white font-normal hover:text-[15px] hover:font-semibold mt-3 cursor-pointer hover:text-red">
                            Residential Estimating
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about-us">
                <div className="flex justify-start gap-1">
                  <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                    {pathname === "/about-us" ? (
                      <div className=" text-red">About Us</div>
                    ) : (
                      "About Us"
                    )}
                  </h2>
                </div>
              </Link>

              <Link href="/payment">
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red ">
                  {pathname === "/payment" ? (
                    <div className=" text-red"> Payment</div>
                  ) : (
                    "Payment"
                  )}
                </h2>
              </Link>

              <Link href="/testimonials">
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                  {pathname === "/testimonials" ? (
                    <div className=" text-red"> Testimonials</div>
                  ) : (
                    "Testimonials"
                  )}
                </h2>
              </Link>

              <Link href="/estimating-fee">
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                  {pathname === "/estimating-fee" ? (
                    <div className=" text-red"> Estimating fee</div>
                  ) : (
                    " Estimating fee"
                  )}
                </h2>
              </Link>

              <Link href="/contact-us">
                <h2 className="text-[16px] text-white font-poppins font-normal hover:text-red">
                  {pathname === "/contact-us" ? (
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
            {/* {input.length > 0 && (
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
            )} */}
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
