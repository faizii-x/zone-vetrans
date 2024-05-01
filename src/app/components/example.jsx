"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Modal from "./modal";

export default function Drawer({ open, setOpen }) {
  const pathname = usePathname();
  const [hello, setHello] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverTwo, setIsHoverTwo] = useState(false);
  const [isHoverThree, setIsHoverThree] = useState(false);
  const [isHoverFour, setIsHoverFour] = useState(false);
  const [isHoverFive, setIsHoverFive] = useState(false);
  const [isHoverSix, setIsHoverSix] = useState(false);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-35 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-50 top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <div className="h-6 w-6 text-red" aria-hidden="true">
                          X
                        </div>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full z-50 flex-col overflow-y-scroll bg-[#212121] py-3 shadow-xl">
                    <div className="p-5">
                      <Link href="/">
                        <Image
                          className="cursor-pointer  h-[70px] lg:ml-0 ml-6"
                          src={Logo}
                        />
                      </Link>

                      <div className="">
                        <div className="mt-6 ">
                          <Link href="/">
                            <h2 className="text-white font-poppins font-semibold">
                              Home
                            </h2>
                          </Link>

                          <Link href="/services">
                            <h2 className="text-white font-poppins font-medium mt-3">
                              Services
                            </h2>
                          </Link>

                          <div
                            className="relative"
                            onClick={handleMouseEnter}
                            onChange={handleMouseLeave}
                          >
                            <div className="flex justify-start gap-1 cursor-pointer">
                              <Link href="/trades">
                                <h2 className="text-white font-poppins font-medium hover:text-red mt-3">
                                  Trades
                                </h2>
                              </Link>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="w-4 h-4 text-white mt-[16px]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>

                            {isHovered && (
                              <div className=" absolute bg-hover rounded-md shadow-lg p-8 mt-3">
                                <div className="grid grid-cols-1 w-[190px]">
                                  <div className="border-b">
                                    <Link href="/trades/general">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
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
                                          href="/trades/sitework"
                                          className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                        >
                                          <div className="text-white text-[16px] font-poppins font-medium">
                                            Sitework
                                          </div>
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
                                            <Link href="trades/sitework/landscape">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Landscaping Estimating
                                              </li>
                                            </Link>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                    <Link href="/trades/concrete">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Concrete
                                      </h2>
                                    </Link>
                                    <Link href="/trades/masonry">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Masonry
                                      </h2>
                                    </Link>

                                    <div
                                      className="relative"
                                      onMouseEnter={handleMouseEnterThree}
                                      onMouseLeave={handleMouseLeaveThree}
                                    >
                                      <div className="flex justify-start gap-1 cursor-pointer">
                                        <Link
                                          href="/trades/metals"
                                          className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                        >
                                          <div className="text-white text-[16px] font-poppins font-medium">
                                            Metals
                                          </div>
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

                                      {isHoverThree && (
                                        <>
                                          <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[45px] z-[999px]">
                                            <Link href="trades/metals/rebar">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Rebar Estimating
                                              </li>
                                            </Link>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/trades/lumber">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Lumber Estimating
                                      </h2>
                                    </Link>
                                    <Link href="/trades/framing">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Framing
                                      </h2>
                                    </Link>
                                    <Link href="/trades/specialties">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Specialties
                                      </h2>
                                    </Link>
                                    <Link href="/trades/equipment">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Equipment
                                      </h2>
                                    </Link>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/trades/furnishing">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Furnishings
                                      </h2>
                                    </Link>
                                    <Link href="/trades/specialConstruction">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Special Construction
                                      </h2>
                                    </Link>
                                    <Link href="/trades/convey">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Conveying Systems
                                      </h2>
                                    </Link>
                                    <div
                                      className="relative"
                                      onMouseEnter={handleMouseEnterFour}
                                      onMouseLeave={handleMouseLeaveFour}
                                    >
                                      <div className="flex justify-start gap-1 cursor-pointer">
                                        <Link
                                          href="/trades/thermal"
                                          className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                        >
                                          <div className="text-white text-[16px] font-poppins font-medium">
                                            Thermal & Moisture Protection
                                          </div>
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

                                      {isHoverFour && (
                                        <>
                                          <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[65px] z-[999px]">
                                            <Link href="/trades/thermal/roofing">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Roofing Estimating
                                              </li>
                                            </Link>
                                            <Link href="/trades/thermal/insulating">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Insulating Estimating
                                              </li>
                                            </Link>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                    <div
                                      className="relative"
                                      onMouseEnter={handleMouseEnterSix}
                                      onMouseLeave={handleMouseLeaveSix}
                                    >
                                      <div className="flex justify-start gap-1 cursor-pointer">
                                        <Link
                                          href="/trades/interior"
                                          className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                        >
                                          <div className="text-white text-[16px] font-poppins font-medium">
                                            Interior & Exterior Finishes
                                          </div>
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

                                      {isHoverSix && (
                                        <>
                                          <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[75px] z-[999px]">
                                            <Link href="/trades/interior/drywall">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Drywall Estimating
                                              </li>
                                            </Link>
                                            <Link href="/trades/interior/flooring">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Flooring Estimating
                                              </li>
                                            </Link>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>

                                  <div className="lg:pl-0 pl-6 border-b">
                                    <div
                                      className="relative"
                                      onMouseEnter={handleMouseEnterFive}
                                      onMouseLeave={handleMouseLeaveFive}
                                    >
                                      <div className="flex justify-start gap-1 cursor-pointer">
                                        <Link
                                          href="/trades/mep"
                                          className="fonty text-white hover:text-[15px] hover:font-semibold font-inter text-[14px] font-normal mt-4 hover:text-[#15A7AD] cursor-pointer"
                                        >
                                          <div className="text-white text-[16px] font-poppins font-medium">
                                            MEP
                                          </div>
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

                                      {isHoverFive && (
                                        <>
                                          <div className="bg-white p-3 mt-3 rounded-md w-[220px] h-[105px] z-[999px]">
                                            <Link href="/trades/mep/plumbing">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Plumbing Estimating
                                              </li>
                                            </Link>
                                            <Link href="/trades/electrical">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Electrical Estimating
                                              </li>
                                            </Link>
                                            <Link href="/trades/mechanical">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Mechanical Estimating
                                              </li>
                                            </Link>
                                            <Link href="/trades/mep/gutter">
                                              <li className="text-[14px] hover:font-bold font-normal hover:text-red">
                                                Gutter Estimating
                                              </li>
                                            </Link>
                                          </div>
                                        </>
                                      )}
                                    </div>

                                    <Link href="/trades/hvac">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        HVAC
                                      </h2>
                                    </Link>
                                    <Link href="/trades/commercial">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Commercial Estimating
                                      </h2>
                                    </Link>
                                    <Link href="/trades/industrial">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Industrial Estimating
                                      </h2>
                                    </Link>
                                    <Link href="/trades/residential">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Residential Estimating
                                      </h2>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <Link href="/about">
                            <div className="flex justify-start gap-1">
                              <h2 className="text-white font-poppins hover:text-red mt-3">
                                {pathname === "/about" ? (
                                  <div className="border-b-2 text-red">
                                    About Us
                                  </div>
                                ) : (
                                  "About Us"
                                )}
                              </h2>
                            </div>
                          </Link>

                          <Link href="/payment">
                            <h2 className="text-white font-poppins hover:text-red mt-3">
                              {pathname === "/payment" ? (
                                <div className="border-b-2 text-red">
                                  {" "}
                                  Payment
                                </div>
                              ) : (
                                "Payment"
                              )}
                            </h2>
                          </Link>

                          <Link href="/testimonials">
                            <h2 className="text-white font-poppins hover:text-red mt-3">
                              {pathname === "/testimonials" ? (
                                <div className="border-b-2 text-red">
                                  {" "}
                                  Testimonials
                                </div>
                              ) : (
                                "Testimonials"
                              )}
                            </h2>
                          </Link>

                          <Link href="/estimation">
                            <h2 className="text-white font-poppins hover:text-red mt-3">
                              {pathname === "/estimation" ? (
                                <div className="border-b-2 text-red">
                                  {" "}
                                  Estimation fee
                                </div>
                              ) : (
                                " Estimation fee"
                              )}
                            </h2>
                          </Link>

                          <Link href="/contact">
                            <h2 className="text-white font-poppins hover:text-red mt-3">
                              {pathname === "/contact" ? (
                                <div className="border-b-2 text-red">
                                  {" "}
                                  Contact Us
                                </div>
                              ) : (
                                " Contact Us"
                              )}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={openModal}
                      className="bg-red rounded-lg w-[160px] h-[60px] flex justify-center items-center cursor-pointer mt-8 mx-auto"
                    >
                      <button className="text-white text-[17px] font-bold ">
                        Upload plans
                      </button>
                    </div>
                  </div>

                  {hello && <Modal closeModal={closeModal} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
