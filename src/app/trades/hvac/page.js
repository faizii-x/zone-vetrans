import Banner from "@/app/components/banner";
import BlackElectrical from "@/app/components/blackElectrical";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import HvacImg from "@/app/components/hvacImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <HvacImg />
      <CallNow />
      <BlackElectrical/>
      <CompSlider />
      <SimpleComp />
      <Banner />
      
    </>
  );
}

export default Page;
