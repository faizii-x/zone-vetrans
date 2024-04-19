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
  const [isHovered, setIsHovered] = useState(false);
  const [hello, setHello] = useState(false);

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
                            <h2 className="text-white font-poppins font-semibold hover:text-red">
                              {pathname === "/" ? (
                                <div className=" text-red font-medium">
                                  Home
                                </div>
                              ) : (
                                "Home"
                              )}
                            </h2>
                          </Link>

                          <Link href="/service">
                            <h2 className="text-white font-poppins font-medium hover:text-red mt-3">
                              {pathname === "/service" ? (
                                <div className=" text-red">Services</div>
                              ) : (
                                "Services"
                              )}
                            </h2>
                          </Link>

                          <div
                            className="relative"
                            onClick={handleMouseEnter}
                            onChange={handleMouseLeave}
                          >
                            <div className="flex justify-start gap-1 cursor-pointer">
                              <h2 className="text-white font-poppins font-medium hover:text-red mt-3">
                                {pathname === "/trade" ? (
                                  <div className=" text-red">Trades</div>
                                ) : (
                                  "Trades"
                                )}
                              </h2>

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
                                    <Link href="/services">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Services
                                      </h2>
                                    </Link>
                                    <Link href="/supply">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Electricity Supply
                                      </h2>
                                    </Link>
                                    <Link href="/energy">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Energy Efficiency
                                      </h2>
                                    </Link>
                                    <Link href="/gas">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Natural Gas Supplier
                                      </h2>
                                    </Link>
                                    <Link href="/solar">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Solar
                                      </h2>
                                    </Link>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/services">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Services
                                      </h2>
                                    </Link>
                                    <Link href="/supply">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Electricity Supply
                                      </h2>
                                    </Link>
                                    <Link href="/energy">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Energy Efficiency
                                      </h2>
                                    </Link>
                                    <Link href="/gas">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Natural Gas Supplier
                                      </h2>
                                    </Link>
                                    <Link href="/solar">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Solar
                                      </h2>
                                    </Link>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/services">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Services
                                      </h2>
                                    </Link>
                                    <Link href="/supply">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Electricity Supply
                                      </h2>
                                    </Link>
                                    <Link href="/energy">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Energy Efficiency
                                      </h2>
                                    </Link>
                                    <Link href="/gas">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Natural Gas Supplier
                                      </h2>
                                    </Link>
                                    <Link href="/solar">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Solar
                                      </h2>
                                    </Link>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/services">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Services
                                      </h2>
                                    </Link>
                                    <Link href="/supply">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Electricity Supply
                                      </h2>
                                    </Link>
                                    <Link href="/energy">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Energy Efficiency
                                      </h2>
                                    </Link>
                                    <Link href="/gas">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Natural Gas Supplier
                                      </h2>
                                    </Link>
                                    <Link href="/solar">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Solar
                                      </h2>
                                    </Link>
                                  </div>
                                  <div className="lg:pl-0 pl-6 border-b">
                                    <Link href="/services">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-2 cursor-pointer hover:text-black hover:font-bold">
                                        Services
                                      </h2>
                                    </Link>
                                    <Link href="/supply">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Electricity Supply
                                      </h2>
                                    </Link>
                                    <Link href="/energy">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Energy Efficiency
                                      </h2>
                                    </Link>
                                    <Link href="/gas">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Natural Gas Supplier
                                      </h2>
                                    </Link>
                                    <Link href="/solar">
                                      <h2 className="text-[17px] text-white font-medium font-poppins mt-3 cursor-pointer hover:text-black hover:font-bold">
                                        Solar
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
                                {pathname === "/refferal" ? (
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
                              {pathname === "/contact" ? (
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
                              {pathname === "/contact" ? (
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
                              {pathname === "/contact" ? (
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
