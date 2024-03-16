import Banner from "@/app/components/banner";
import BlackElectrical from "@/app/components/blackElectrical";
import CompSlider from "@/app/components/compSlider";
import ElectricalImg from "@/app/components/electricalImg";
import Footer from "@/app/components/footer";
import SimpleComp from "@/app/components/simpleComp";
import React from "react";

function Page() {
  return (
    <>
      <ElectricalImg />
      <BlackElectrical/>
      <CompSlider/>
      <SimpleComp/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default Page;
