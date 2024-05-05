import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import FurnishImg from "@/app/components/furnishImg";
import FurnishTwo from "@/app/components/furnishTwo";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <FurnishImg />
      <CallNow />
      <FurnishTwo/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>

    </>
  );
}

export default Page;
