import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import CostStyle from "@/app/components/costStyle";
import FloorImg from "@/app/components/floorImg";
import FlorEstimate from "@/app/components/florEstimate";
import Footer from "@/app/components/footer";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <FloorImg />
      <CostStyle />
      <CallNow />
      <FlorEstimate />
      <CompSlider />
      <SimpleComp />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
