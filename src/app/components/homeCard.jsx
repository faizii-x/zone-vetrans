import React from "react";

function HomeCard() {
  return (
    <>
      <h2 className="text-[30px] font-bold mt-8 w-[90%] container mx-auto">
        Our Services
      </h2>
              
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[90%] container mx-auto mt-6">
        <div>
          <div className="bg-red w-[90px] h-[40px] flex justify-center items-center rounded-lg">
            <p className="text-white text-[18px]">1</p>
          </div>
          <div className="bg-blacks rounded-lg p-4 mt-2 ">
            <h3 className="text-center text-[22px] font-poppins font-semibold text-white">
            Cost Estimating services
            </h3>
            <p className="w-[80%] mx-auto font-poppins font-light text-[18px] text-white mt-2">
              Cost Estimation is a crucial and beneficial method to understand a
              project's requirements and duration, though it might be quite
              tedious and time-intensive.
            </p>
          </div>
        </div>
        {/* ............................. */}
        <div>
          <div className="bg-red w-[90px] h-[40px] flex justify-center items-center rounded-lg">
            <p className="text-white text-[18px]">2</p>
          </div>
          <div className="bg-blacks rounded-lg p-4 mt-2 ">
            <h3 className="text-center text-[22px] font-poppins font-semibold text-white">
            Construction Takeoff Services
            </h3>
            <p className="w-[80%] mx-auto font-poppins font-light text-[18px] text-white mt-2">
              Our experts are always here to help you to fill the gaps which
              exits in the initial phases of the proposed solution especially
              when we talk about Quantities.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[90%] container mx-auto mt-6">
        <div>
          <div className="bg-red w-[90px] h-[40px] flex justify-center items-center rounded-lg mt-6">
            <p className="text-white text-[18px]">3</p>
          </div>
          <div className="bg-blacks rounded-lg p-4 mt-2 ">
            <h3 className="text-center text-[22px] font-poppins font-semibold text-white">
             CPM Scheduling
            </h3>
            <p className="w-[80%] mx-auto font-poppins font-light text-[18px] text-white mt-2">
              Scheduling transforms a project's high-level plan into a
              time-focused schedule, considering task durations, priorities,
              dependencies and deadlines.
            </p>
          </div>
        </div>
        {/* ......................... */}
        <div>
          <div className="bg-red w-[90px] h-[40px] flex justify-center items-center rounded-lg mt-6">
            <p className="text-white text-[18px]">4</p>
          </div>
          <div className="bg-blacks rounded-lg p-4 mt-2 ">
            <h3 className="text-center text-[22px] font-poppins font-semibold text-white">
              Planning
            </h3>
            <p className="w-[80%] mx-auto font-poppins font-light text-[18px] text-white mt-2">
              In project management, planning establishes the project's roadmap,
              while scheduling aligns that roadmap with a timeline for timely
              execution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
