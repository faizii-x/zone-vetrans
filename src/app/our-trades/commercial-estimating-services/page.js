import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CommercialImg from "@/app/components/commercialImg";
import CompSlider from "@/app/components/compSlider";
import EstimateComp from "@/app/components/estimateComp";
import EstimateTwo from "@/app/components/estimateTwo";
import SecondMechanical from "@/app/components/secondMechanical";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <CommercialImg />
      <CallNow/>
      <SecondMechanical/>
      <EstimateComp/>
      <EstimateTwo/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
   
    </>
  );
}

export default Page;
