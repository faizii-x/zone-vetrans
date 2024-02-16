import React from "react";
import Image from "next/image";
import Home1 from "../../../public/png/home1.png";
import Home2 from "../../../public/png/home2.png";
import Home3 from "../../../public/png/home3.png";
import Home4 from "../../../public/png/home4.png";
import Home5 from "../../../public/png/home5.png";

function HalfText() {
  return (
    <>
      <h1 className="text-[30px] font-bold w-[90%] mx-auto mt-10">
        How can we help you win more projects?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-black font-poppins font-bold">
              “I have NO TIME to estimate projects” <br />
            </span>
            -Every Contractor in America
            <br />
            <span className="mt-6">
              The enemy of every contractor is the lack of time. Most
              contractors are busy working IN the business rather than working
              ON the business. If that’s the case, you’re not alone. We’ve
              worked with over 1,400 contractors nationwide with our
              construction estimating services and consulting, and that’s
              normal. 
            </span>
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Home1} />
        </div>
      </div>
      {/* ...................................... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 w-[90%] container mx-auto">
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Home2} />
        </div>
        <div className="col-span-2 mt-6">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-black font-poppins font-bold">
              You’re probably MISSING OUT on $200,000 per month because you’re
              busy
            </span>

            <br />
            <span className="">
              We did an analysis and more contractors are missing out on several
              projects per month that they can actually win because they are so
              busy they just pass them up.
              <br /> Depending on what your average contract value is, most
              contractors are missing between $200-500K per month in sales
              because of being busy.
              <br /> We’ll prepare your entire estimate for you so can keep
              bidding those jobs.
            </span>
          </p>
        </div>
      </div>
      {/* ....................................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] container mx-auto">
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
          <Image className="mx-auto" src={Home3} />
        </div>
      </div>
      {/* ......................................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 w-[90%] container mx-auto">
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Home4} />
        </div>
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-black font-poppins font-bold">
              We can help you NEGOTIATE AND CLOSE based on proven strategies
            </span>

            <br />
            <span className="">
              Estimating is only a small part of what it takes to win a job. We
              like to see this as a TEAM EFFORT.
              <br />
              What do you do after the estimate to give yourself the best chance
              of winning? We can help you work the numbers when you’re
              negotiating, and even jump on a conference call with your client
              (as your estimating team) to help you close. We can even advise
              you on EXACTLY WHAT TO DO to have them wanting to USE YOU instead
              of your competitor.
              
            </span>
          </p>
        </div>
      </div>
      {/* ............................................. */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-[90%] container mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[22px] font-poppins font-normal">
            <span className="text-black font-poppins font-bold">
              AND IF YOU’RE SERIOUS ABOUT GROWING YOUR BUSINESS, WE CAN HELP YOU
              GET MORE PROJECT LEADS AND CLOSE MORE SALES.
            </span>

            <br />
            <span className="mt-6">
              After working on the estimating side of things, we help many of
              our clients get more leads so they can keep growing their
              business.
            </span>
          </p>
        </div>
        <div className="col-span-1 self-center">
          <Image className="mx-auto" src={Home5} />
        </div>
      </div>
    </>
  );
}

export default HalfText;
