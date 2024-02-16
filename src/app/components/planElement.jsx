import React from "react";
import Image from "next/image";
import Fullimg from "../../../public/png/fullimg.png";
import About1 from "../../../public/png/about1.png";

function PlanElement() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-[90%] mt-10 mx-auto container">
        <div className="col-span-1 bg-blacks rounded-lg p-8 h-[100%]">
          <h4 className="text-white text-[33px] font-poppins font-bold text-center">
            Key Elements of Effective Planning{" "}
          </h4>
          <Image className="mx-auto mt-4" src={About1} />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-blacks rounded-lg p-8">
              <p className="text-white text-[22px] font-poppins font-medium">
                Define Project Objectives and Deliverables
              </p>
              <p className="text-white text-[20px] font-poppins font-light mt-4">
                Clearly articulate what needs to be achieved by the end of the
                project.
              </p>
            </div>
            <div className="bg-blacks rounded-lg p-8">
              <p className="text-white text-[22px] font-poppins font-medium">
                Scope Definition{" "}
              </p>
              <p className="text-white text-[20px] font-poppins font-light mt-6">
                Clearly outline the boundaries and limitations of the project to
                avoid scope creep.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-blacks rounded-lg p-8">
              <p className="text-white text-[20px] font-poppins font-medium">
                Risk Assessment and Management{" "}
              </p>
              <p className="text-white text-[18px] font-poppins font-light mt-4">
                Identify potential risks and develop contingency plans
              </p>
            </div>
            <div className="bg-blacks rounded-lg p-8">
              <p className="text-white text-[20px] font-poppins font-medium">
                Resource Allocation and Budgeting
              </p>
              <p className="text-white text-[18px] font-poppins font-light mt-6">
                {" "}
                Determine the resources required and allocate them according to
                priority.
              </p>
            </div>
            <div className="bg-blacks rounded-lg p-8">
              <p className="text-white text-[20px] font-poppins font-medium">
                Task Sequencing and Dependencies
              </p>
              <p className="text-white text-[18px] font-poppins font-light mt-6">
                Understand the logical flow of tasks and their dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ...................... */}

      <h2 className="text-[22px] font-bold w-[90%] mx-auto mt-6">
        Steps to Create a Robust Project Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 mt-3 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2">
          <div className="flex justify-start gap-3">
            <p className="text-[18px] font-poppins font-semibold">1.</p>
            <p className="text-[18px] font-poppins font-semibold">
              Project Initiation
            </p>
          </div>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Define Objective and Scope:{" "}
            <span className="font-light">
              Clearly articulate what the project aims to achieve and what is
              include in the project scope.
            </span>{" "}
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Identity Stakeholders:{" "}
            <span className="font-light">
              Determine who the key stakeholders are and understand their
              interests and expectation.
            </span>{" "}
          </li>
{/* ,.............................. */}
          <div className="flex justify-start gap-3 mt-5">
            <p className="text-[18px] font-poppins font-semibold">2.</p>
            <p className="text-[18px] font-poppins font-semibold">
              Risk Assessment and Mitigation
            </p>
          </div>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Identify Risks:{" "}
            <span className="font-light">
              Analyze potential risks and uncertainties that could impact the
              project.
            </span>{" "}
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Develop Risk Response Plans:{" "}
            <span className="font-light">
              Develop strategies to mitigate, transfer, or accept identified
              risks.
            </span>{" "}
          </li>
          {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
          <div className="flex justify-start gap-3 mt-5">
            <p className="text-[18px] font-poppins font-semibold">3.</p>
            <p className="text-[18px] font-poppins font-semibold">
              Risk Assessment and Mitigation
            </p>
          </div>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Identify Risks:{" "}
            <span className="font-light">
              Analyze potential risks and uncertainties that could impact the
              project.
            </span>{" "}
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Develop Risk Response Plans:{" "}
            <span className="font-light">
              Develop strategies to mitigate, transfer, or accept identified
              risks.
            </span>{" "}
          </li>
          {/* .......................... */}

          <div className="flex justify-start gap-3 mt-5">
            <p className="text-[18px] font-poppins font-semibold">4.</p>
            <p className="text-[18px] font-poppins font-semibold">
              Risk Assessment and Mitigation
            </p>
          </div>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Identify Risks:{" "}
            <span className="font-light">
              Analyze potential risks and uncertainties that could impact the
              project.
            </span>{" "}
          </li>
          <li className="text-[18px] font-poppins font-semibold mt-2">
            Develop Risk Response Plans:{" "}
            <span className="font-light">
              Develop strategies to mitigate, transfer, or accept identified
              risks.
            </span>{" "}
          </li>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Fullimg} />
        </div>
      </div>
    </>
  );
}

export default PlanElement;
