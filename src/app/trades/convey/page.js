import Banner from "@/app/components/banner";
import BlackConvey from "@/app/components/blackConvey";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import ConveyImg from "@/app/components/conveyImg";
import ConveySimple from "@/app/components/conveySimple";
import Footer from "@/app/components/footer";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ConveyImg />
      <BlackConvey/>
      <CallNow/>
      <ConveySimple/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
