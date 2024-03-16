import Banner from "@/app/components/banner";
import BlackLumber from "@/app/components/blackLumber";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import LumberImg from "@/app/components/lumberImg";
import LumberText from "@/app/components/lumberText";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <LumberImg />
      <CallNow />
      <LumberText/>
      <BlackLumber/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
