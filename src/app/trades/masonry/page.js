import Banner from "@/app/components/banner";
import BlackFive from "@/app/components/blackFive";
import BlackFour from "@/app/components/blackFour";
import CallNow from "@/app/components/callNow";
import CompMasonry from "@/app/components/compMasonry";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import MasonryImg from "@/app/components/masonryImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <MasonryImg />
      <BlackFour />
      <CallNow/>
      <CompMasonry/>
      <BlackFive/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
