import Banner from "@/app/components/banner";
import CompSlider from "@/app/components/compSlider";
import ElecComp from "@/app/components/elecComp";
import ElectricalImg from "@/app/components/electricalImg";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ElectricalImg />
      <ElecComp />
      <CompSlider />
      <SimpleComp />
      <Banner />
  
    </>
  );
}

export default Page;
