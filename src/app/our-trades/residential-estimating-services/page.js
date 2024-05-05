import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import EstimateComp from "@/app/components/estimateComp";
import EstimateTwo from "@/app/components/estimateTwo";
import ResidentialImg from "@/app/components/residentialImg";
import ResidentialSimple from "@/app/components/residentialSimple";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ResidentialImg />
      <CallNow />
      <ResidentialSimple />
      <EstimateComp/>
      <EstimateTwo/>
      {/* <CallNow /> */}
      <CompSlider />
      <SimpleComp />
      <Banner />
    
    </>
  );
}

export default Page;
