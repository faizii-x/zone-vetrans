import React from "react";

function ThermalStyle() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-[60%] w-[90%] mx-auto hide-large-screen">
        <div className="bg-blacks rounded-lg p-4 hover:bg-red cursor-pointer">
          <h5 className="text-white text-[18px] font-poppins font-bold text-center">
            Roofing Estimating Services
          </h5>
          <p className="mt-2 text-white text-[16px] font-poppins font-light">
            Get accurate flooring estimate with us. Our services cover material
            takeoffs, bid estimate, and CAD drafting for seamless project
            planning. Trust our experties for precise bids and successfull
            project outcomes.
          </p>
          <div className="bg-red w-[140px] h-[40px] rounded-md mt-3 p-3 flex justify-center items-center">
          <button className="text-[16px] text-white font-poppins">Read more</button>
          </div>
        </div>
        <div className="bg-blacks rounded-lg p-4 hover:bg-red cursor-pointer mt-3">
          <h5 className="text-white text-[18px] font-poppins font-bold text-center">
         Insulation Estimating Services
          </h5>
          <p className="mt-2 text-white text-[16px] font-poppins font-light">
            Streamline your project with our precise drywall estimating. From
            material takeoffs to bid estimates and CAD drafting , we ensure
            accurate planning for your projects. Trust our expertise for
            efficient project management and successful outcomes.
          </p>
          <div className="bg-red w-[140px] h-[40px] rounded-md mt-3 p-3 flex justify-center items-center">
          <button className="text-[16px] text-white font-poppins">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThermalStyle;
