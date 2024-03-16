import React from 'react'
import Image from "next/image";
import Lumb from "../../../public/png/lumb.png";


function LumberText() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 w-[90%] mx-auto">
        <div className="col-span-2">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-black font-poppins font-bold">
              We can estimate your entire project for you based on your LOCAL
              PRICING so the numbers will be accurate.
            </span>

            <br />
            <span className="mt-6">
              Veterans Estimators is US Based and a licensed General Contractor,
              so we have actual building experience. We use a combination of a
              cost database and our experience to price your projects based on
              the zip code of your project (Note: Everyone at I AM Builders has
              actual field experience in construction, not just theory or “paper
              estimating”). Pricing for labor and material varies by area and
              zip code, so we make adjustments for local labor rates, material
              pricing, and even look at the area’s property value to determine
              accurate pricing. That’s what makes our construction estimating
              service a great option for busy contractors. We even back our
              estimates with a $1 MILLION ACCURACY GUARANTEE which covers all of
              our clients by our Errors and Omissions Insurance.
            </span>
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Lumb} />
        </div>
      </div>
    
    
    </>
  )
}

export default LumberText