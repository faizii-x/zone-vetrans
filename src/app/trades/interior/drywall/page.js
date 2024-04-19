import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import DryImg from "@/app/components/dryImg";
import SimpleComp from "@/app/components/simpleComp";
import SimpleTextt from "@/app/components/simpleTextt";
import React from "react";

function Page() {
  return (
    <>
      <DryImg />
      <CallNow />
      <SimpleTextt />
      <CompSlider />
      <SimpleComp />
      <Banner />
     
    </>
  );
}

export default Page;
