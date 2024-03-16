import Banner from "@/app/components/banner";
import BlackMetal from "@/app/components/blackMetal";
import CallNow from "@/app/components/callNow";
import CompSlider from "@/app/components/compSlider";
import Footer from "@/app/components/footer";
import MetalBullet from "@/app/components/metalBullet";
import MetalImg from "@/app/components/metalimg";
import SimpleComp from "@/app/components/simpleComp";
import Text from "@/app/components/text";
import React from "react";

function page() {
  return (
    <>
      <MetalImg />
      <BlackMetal />
      <MetalBullet />
      <CallNow />
      <Text />
      <CompSlider />
      <SimpleComp />
      <Banner />
      <Footer />
    </>
  );
}

export default page;
