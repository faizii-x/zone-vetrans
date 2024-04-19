import Banner from "@/app/components/banner";
import BlackRebar from "@/app/components/blackRebar";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import RebarComp from "@/app/components/rebarComp";
import RebarImg from "@/app/components/rebarImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <RebarImg />
      <BlackRebar/>
      <CallNow/>
      <RebarComp/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
    
    </>
  );
}

export default Page;
