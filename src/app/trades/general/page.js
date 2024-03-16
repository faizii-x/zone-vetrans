import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CardBlack from "@/app/components/cardBlack";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import GeneralImg from "@/app/components/generalImg";
import GeneralMap from "@/app/components/generalMap";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <GeneralImg />
      <CardBlack />
      <CallNow />
      <GeneralMap />
      <CompSlider />
      <SimpleComp />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
