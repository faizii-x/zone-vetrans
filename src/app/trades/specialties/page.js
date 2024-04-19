import Banner from "@/app/components/banner";
import BlackSpecial from "@/app/components/blackSpecial";
import BlackSpecialTwo from "@/app/components/blackSpecialTwo";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import SimpleComp from "@/app/components/simpleComp";
import SpecialImg from "@/app/components/specialImg";
import React from "react";

function Page() {
  return (
    <>
      <SpecialImg />
      <BlackSpecial/>
      <CallNow/>
      <BlackSpecialTwo/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
     
    </>
  );
}

export default Page;
