import Banner from "@/app/components/banner";
import BlackElectrical from "@/app/components/blackElectrical";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import EstimateComp from "@/app/components/estimateComp";
import EstimateTwo from "@/app/components/estimateTwo";
import HvacImg from "@/app/components/hvacImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <HvacImg />
      <CallNow />
      <BlackElectrical/>
      <EstimateComp/>
      <EstimateTwo/>
      <CompSlider />
      <SimpleComp />
      <Banner />
      
    </>
  );
}

export default Page;
