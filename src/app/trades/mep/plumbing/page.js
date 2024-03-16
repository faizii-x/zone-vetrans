import Banner from "@/app/components/banner";
import BlackPlumb from "@/app/components/blackPlumb";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import PlumPara from "@/app/components/plumPara";
import PlumbSecond from "@/app/components/plumbSecond";
import PlumbingImg from "@/app/components/plumbingImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <PlumbingImg />
      <BlackPlumb/>
      <PlumPara/>
      <CallNow/>
      <PlumbSecond/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
