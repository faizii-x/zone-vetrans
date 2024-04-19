import Banner from "@/app/components/banner";
import BlackFraming from "@/app/components/blackFraming";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import FramingImg from "@/app/components/framingImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <FramingImg />
      <CallNow />
      <BlackFraming/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
     
    </>
  );
}

export default Page;
