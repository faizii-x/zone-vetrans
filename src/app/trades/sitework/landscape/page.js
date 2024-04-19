import Banner from "@/app/components/banner";
import BlackLand from "@/app/components/blackLand";
import CompSlider from "@/app/components/compSlider";
import LandText from "@/app/components/landText";
import LandscapeImg from "@/app/components/landscapeImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <LandscapeImg />
      <BlackLand />
      <LandText />
      <CompSlider />
      <SimpleComp />
      <Banner />
    </>
  );
}

export default Page;
