import Banner from "@/app/components/banner";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import ResidentialImg from "@/app/components/residentialImg";
import ResidentialSimple from "@/app/components/residentialSimple";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ResidentialImg />
      <CallNow />
      <ResidentialSimple />
      <CallNow />
      <CompSlider />
      <SimpleComp />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
