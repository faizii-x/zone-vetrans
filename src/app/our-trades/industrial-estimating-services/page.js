import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import EstimateComp from "@/app/components/estimateComp";
import EstimateTwo from "@/app/components/estimateTwo";
import IndustrialImg from "@/app/components/industrialImg";
import SecondCommercial from "@/app/components/secondCommercial";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <IndustrialImg />
      <CallNow />
      <SecondCommercial />
      <EstimateComp/>
      <EstimateTwo/>
      <CompSlider />
      <SimpleComp />
      <Banner />
    
    </>
  );
}

export default Page;
