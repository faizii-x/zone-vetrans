"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CostModal from "./costModal";
import Image from "next/image";
import PlanImg from "../../../public/png/planimg.png";
import CallNow from "./callNow";
import PlanStyle from "./planStyle";

function PlanningImg() {
  const [serviceModal, setServiceModal] = useState(false);

  const openModal = () => {
    setServiceModal(true);
  };
  const closeModal = () => {
    setServiceModal(false);
  };

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center p-4 "
        style={{ backgroundImage: `url(${"/png/takeoffbg.png"})` }}
      >
        <Navbar />
        <div className="self-center">
          <p className="w-[100%]  text-white text-center text-[36px] font-poppins font-bold p-4 pt-[130px]">
            Planning
          </p>
        </div>
      </div>

      {/* .............................. */}

      <p className="w-[90%] mx-auto text-[22px] font-poppins font-normal mt-6">
        In the world of project management, the first and crucial step is
        planning. This involves creating a detailed blueprint for the project's
        journey. Now, planning isn't the same as scheduling. Planning is like
        making a big map with the project managers and construction folks, while
        scheduling is like putting that map into a timeline with the help of
        scheduling experts. So, planning sets the direction, and scheduling
        makes sure everything happens at the right time.
      </p>

      <div
        onClick={openModal}
        className="fixed right-0 top-[390px] z-[1000px] shadow-lg bg-red rounded-lg overflow-hidden cursor-pointer w-[120px] h-[50px] flex justify-center items-center"
      >
        <button className="text-white text-[18px] font-semibold blink-text">
          Services
        </button>
      </div>

      <CostModal serviceModal={serviceModal} setServiceModal={closeModal} />
      {/* ...................................................... */}

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        What is Construction Master Plan?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            A construction master plan addresses how will the project be
            planned, organized, and major work activities be controlled to meet
            the goals of finishing the work on time, within budget and as
            specified. A construction master plan addresses how will the project
            be planned, organized, and major work activities be controlled to
            meet the goals of finishing the work on time, within budget and as
            specified. A construction master plan addresses how will the project
            be planned, organized, and major work activities be controlled to
            meet the goals of finishing the work on time, within budget and as
            specified.
            <br /> Contracting plan is the major consideration in formulating
            the master construction plan, which answers a lot of questions.
            Questions related to government and social restraint, resources for
            construction, owner’s policies or legal requirements, contractual
            requirement affecting master plan are not answered by contracting
            plan.
            <br /> Answers to these questions must be found during the
            development of the project execution plan. Project execution plan
            shall be reviewed and evaluation shall be done as the work
            progresses. Minor variations are common but major changes shall be
            considered with extreme caution.
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={PlanImg} />
        </div>
      </div>
      <PlanStyle />
      <CallNow />
    </>
  );
}

export default PlanningImg;
