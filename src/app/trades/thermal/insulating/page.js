import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import CostStyle from "@/app/components/costStyle";
import InsulateImg from "@/app/components/insulateImg";
import InsulateText from "@/app/components/insulateText";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <InsulateImg />
      <CostStyle/>
      <CallNow/>
      <InsulateText/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
     
    </>
  );
}

export default Page;
