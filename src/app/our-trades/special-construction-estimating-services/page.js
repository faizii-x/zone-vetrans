import ConstructImg from "@/app/components/ConstructImg";
import Banner from "@/app/components/banner";
import BlackLast from "@/app/components/blackLast";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Lasty from "@/app/components/lasty";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ConstructImg />
      <BlackLast/>
      <CallNow />
      <Lasty/>
      <CompSlider />
      <SimpleComp />
      <Banner />
    </>
  );
}

export default Page;
