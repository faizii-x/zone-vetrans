import Banner from "@/app/components/banner";
import BlackMechanical from "@/app/components/blackMechanical";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import MechanicalImg from "@/app/components/mechanicalImg";
import MechanicalText from "@/app/components/mechanicalText";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <MechanicalImg />
      <BlackMechanical />
      <CallNow />
      <MechanicalText />
      <CompSlider />
      <SimpleComp />
      <Banner />
   
    </>
  );
}

export default Page;
