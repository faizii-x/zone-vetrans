import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function CostModal({ serviceModal, setServiceModal }) {
  return (
    <Transition.Root show={serviceModal} as={Fragment}>
      <Dialog as="div" className="relative " onClose={setServiceModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
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
                    <div className="absolute z-[1000px] top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-[black] "
                        onClick={() => setServiceModal(false)}
                      >
                        <span className="sr-only">Close panel</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex z-[1000px] h-[260px] rounded-lg flex-col mt-[125px] overflow-y-hidden mr-2 bg-black py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3 -mt-4">
                      <Link href="/cost-estimating-services">
                        <p className="hover:text-red text-[16px]  font-poppins hover:font-bold font-medium text-white ">
                          COST ESTIMATING Services
                        </p>
                      </Link>
                      <Link href="/construction-takeoff-services">
                        <p className="hover:text-red text-[16px] font-poppins hover:font-bold font-medium text-white pt-4">
                          CONSTRUCTION TAKEOFF SERVICES
                        </p>
                      </Link>
                      <Link href="/construction-takeoff-services/quantity-takeoff-services">
                        <p className="hover:text-red text-[12px]  font-poppins hover:font-bold font-medium text-white pt-2">
                          QUANTITY TAKEOFF
                        </p>
                      </Link>
                      <Link href="/construction-takeoff-services/material-takeoff-services">
                        <p className="hover:text-red text-[12px]  font-poppins hover:font-bold font-medium text-white pt-2">
                          MATERIAL TAKEOFF
                        </p>
                      </Link>
                      <Link href="/cost-scheduling">
                        <p className="hover:text-red text-[16px]  font-poppins hover:font-bold font-medium text-white pt-4">
                          CPM SCHEDULING
                        </p>
                      </Link>
                      <Link href="/planning">
                        <p className="hover:text-red hover:font-bold  font-poppins text-[16px] font-medium text-white pt-4">
                          PLANNING
                        </p>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
