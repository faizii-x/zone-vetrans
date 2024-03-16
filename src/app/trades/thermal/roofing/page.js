import Banner from "@/app/components/banner";
import BlackRoof from "@/app/components/blackRoof";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import RoofText from "@/app/components/roofText";
import RoofingImg from "@/app/components/roofingImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <RoofingImg />
      <BlackRoof />
      <CallNow />
      <RoofText />
      <CompSlider />
      <SimpleComp />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
